/* eslint-disable no-console */
require('dotenv/config');
const express = require('express');
const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');
const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);
app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query("select 'successfully connected' as \"message\"")
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
    select "productId",
    "name",
    "price",
    "image",
    "shortDescription"
      from "products"
  `;
  db.query(sql)
    .then(result => {
      const product = result.rows;
      res.json(product);
    })
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const parse = parseInt(req.params.productId);
  const text = `select * from "products"
                where "productId" = $1`;
  const values = [parse];
  if (
    isNaN(req.params.productId) ||
    parse < 0
  ) {
    next(new ClientError(`The requested productID was not a number ${req.method} ${req.originalUrl}`, 400));
  } else {
    db.query(text, values)
      .then(response => {
        const products = response.rows[0];
        if (!products) {
          next(new ClientError(`No products found.${req.method} ${req.originalUrl}`, 404));
        } else {
          res.json(products);
        }
      })
      .catch(err => {
        next(err);
      });
  }
});

app.get('/api/cart/', (req, res, next) => {
  if (!req.session.cartId) {
    res.json([]);
  } else {
    const cartSQL = `select "c"."cartItemId",
                      "c"."price",
                      "p"."productId",
                      "p"."image",
                      "p"."name",
                      "p"."shortDescription"
                      from "cartItems" as "c"
                      join "products" as "p" using ("productId")
                      where "c"."cartId" = $1`;
    const params = [req.session.cartId];
    return db.query(cartSQL, params)
      .then(result => {
        res.status(200).json(result.rows);
        // console.log(result);
      });
  }
});

app.post('/api/cart', (req, res, next) => {
  const productId = [req.body.productId];
  if (!req.body.productId || isNaN(req.body.productId)) {
    res.status(400).json({
      error: 'Invalid or no input.'
    });
  } else {
    const priceSQL = `select "price" from "products"
                    where "productId"=$1`;
    const params = productId;
    db.query(priceSQL, params)
      .then(result => {
        if (result.rows.length === 0) {
          throw new ClientError('No rows!', 400);
        }
        const price = result.rows[0].price;
        const cartId = req.session.cartId;
        if (!cartId) {
          const insertSQL = `insert into "carts" ("cartId", "createdAt")
                            values (default, default)
                              returning "cartId"`;
          return db.query(insertSQL).then(response => {
            const cart = {};
            const cartId = response.rows[0].cartId;
            cart.cartId = cartId;
            cart.price = price;
            return cart;
          });
        } else {
          return { cartId, price };
        }
      })
      .then(cartAndPrice => {
        const productIdValue = productId[0];
        req.session.cartId = cartAndPrice.cartId;
        const cartItems = `insert into "cartItems" ("cartId", "productId", "price")
                            values ($1, $2, $3)
                              returning "cartItemId"`;
        const params = [req.session.cartId, productIdValue, cartAndPrice.price];
        return db.query(cartItems, params).then(result => {
          const cartItemId = result.rows[0].cartItemId;
          return cartItemId;
        });
        // Create a shopping cart here and create id
      })
      .then(currentCart => {
        const params = [currentCart];
        console.log(currentCart);
        const cartItemQuery = `select "c"."cartItemId",
                                "c"."price",
                                "p"."productId",
                                "p"."image",
                                "p"."name",
                                "p"."shortDescription"
                                from "cartItems" as "c"
                                join "products" as "p" using ("productId")
                                where "c"."cartItemId" = $1`;
        return db.query(cartItemQuery, params).then(result => {
          res.status(201).json(result.rows[0]);
        });
        // save cart item
        // save with cartId price and productId
      })
      .catch(err => next(err));
  }
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
