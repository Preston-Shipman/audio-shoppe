--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cartItems; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public."cartItems" (
    "cartItemId" integer NOT NULL,
    "cartId" integer NOT NULL,
    "productId" integer NOT NULL,
    price integer NOT NULL
);


ALTER TABLE public."cartItems" OWNER TO dev;

--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."cartItems_cartItemId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."cartItems_cartItemId_seq" OWNER TO dev;

--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."cartItems_cartItemId_seq" OWNED BY public."cartItems"."cartItemId";


--
-- Name: carts; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.carts (
    "cartId" integer NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.carts OWNER TO dev;

--
-- Name: carts_cartId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."carts_cartId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."carts_cartId_seq" OWNER TO dev;

--
-- Name: carts_cartId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."carts_cartId_seq" OWNED BY public.carts."cartId";


--
-- Name: orders; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.orders (
    "orderId" integer NOT NULL,
    "cartId" integer NOT NULL,
    name text NOT NULL,
    "creditCard" text NOT NULL,
    "shippingAddress" text NOT NULL,
    "createdAt" timestamp(6) with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.orders OWNER TO dev;

--
-- Name: orders_orderId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."orders_orderId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."orders_orderId_seq" OWNER TO dev;

--
-- Name: orders_orderId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."orders_orderId_seq" OWNED BY public.orders."orderId";


--
-- Name: products; Type: TABLE; Schema: public; Owner: dev
--

CREATE TABLE public.products (
    "productId" integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    image text NOT NULL,
    "shortDescription" text NOT NULL,
    "longDescription" text NOT NULL
);


ALTER TABLE public.products OWNER TO dev;

--
-- Name: products_productId_seq; Type: SEQUENCE; Schema: public; Owner: dev
--

CREATE SEQUENCE public."products_productId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."products_productId_seq" OWNER TO dev;

--
-- Name: products_productId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dev
--

ALTER SEQUENCE public."products_productId_seq" OWNED BY public.products."productId";


--
-- Name: cartItems cartItemId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public."cartItems" ALTER COLUMN "cartItemId" SET DEFAULT nextval('public."cartItems_cartItemId_seq"'::regclass);


--
-- Name: carts cartId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.carts ALTER COLUMN "cartId" SET DEFAULT nextval('public."carts_cartId_seq"'::regclass);


--
-- Name: orders orderId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.orders ALTER COLUMN "orderId" SET DEFAULT nextval('public."orders_orderId_seq"'::regclass);


--
-- Name: products productId; Type: DEFAULT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.products ALTER COLUMN "productId" SET DEFAULT nextval('public."products_productId_seq"'::regclass);


--
-- Data for Name: cartItems; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public."cartItems" ("cartItemId", "cartId", "productId", price) FROM stdin;
8	40	1	400000
9	41	4	229998
10	42	1	400000
11	43	1	400000
12	43	1	400000
13	43	1	400000
14	43	1	400000
15	43	4	229998
16	43	7	74998
17	43	4	229998
18	44	1	400000
19	45	1	400000
20	46	1	400000
21	47	4	229998
22	47	4	229998
23	48	1	400000
24	48	1	400000
25	48	1	400000
26	48	1	400000
27	48	4	229998
28	48	1	400000
29	48	1	400000
30	48	1	400000
31	48	1	400000
32	48	1	400000
33	49	1	400000
34	50	1	400000
35	51	1	400000
36	51	1	400000
37	51	1	400000
38	51	1	400000
39	52	1	400000
40	53	1	400000
41	54	4	229998
42	54	1	400000
43	55	4	229998
44	55	4	229998
45	55	4	229998
46	55	4	229998
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.carts ("cartId", "createdAt") FROM stdin;
40	2020-03-13 02:10:43.461702+00
41	2020-03-13 23:20:47.697155+00
42	2020-03-15 03:51:22.211124+00
43	2020-03-15 19:27:36.156483+00
44	2020-03-17 21:23:53.724291+00
45	2020-03-17 21:45:21.308936+00
46	2020-03-18 21:38:09.286239+00
47	2020-03-20 01:50:36.855228+00
48	2020-03-22 02:46:00.984956+00
49	2020-03-22 03:47:54.825846+00
50	2020-03-22 03:51:48.219498+00
51	2020-03-22 03:53:53.418481+00
52	2020-03-22 04:16:29.139717+00
53	2020-03-22 04:25:21.307472+00
54	2020-03-24 06:25:33.913446+00
55	2020-03-24 21:55:56.147438+00
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.orders ("orderId", "cartId", name, "creditCard", "shippingAddress", "createdAt") FROM stdin;
1	45	Preston	11111111111111	5515 Dan Gogh Way	2020-03-17 21:53:08.277891+00
7	53	Jimbo Daniels	45784678457667	5515 Dan Dogh Way	2020-03-22 04:25:42.572446+00
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: dev
--

COPY public.products ("productId", name, price, image, "shortDescription", "longDescription") FROM stdin;
1	Bowers & Wilkins Formation Duo	400000	/images/bowersWilkins.jpg	Experience high-fidelity wireless audio with this Bowers and Wilkins Formation Duo wireless speaker system.	The 1-inch carbon dome tweeters and 6.5-inch continuum cone woofers deliver high-fidelity audio across a frequency response range of 25Hz to 33kHz. Featuring advanced wireless technology, this Bowers and Wilkins Formation Duo wireless speaker system provides a high-resolution streaming experience with the audio quality of a wired system
4	ELAC Navis	229998	/images/elac.jpg	Enjoy high-end audio performance with this gloss white ELAC Navis powered bookshelf speaker.	Separate tweeter, midrange and subwoofer drivers accurately play a full range of sounds from bright highs to rumbling lows. All-analog signal processing ensures this ELAC Navis powered bookshelf speaker faithfully reproduces inputs from turntables and other nondigital sources.
6	KEF Reference Series	399998	/images/kef.jpg	Experience expansive audio with these KEF REFERENCE 1 speakers.	The compact bookshelf size lets you set hi-fi components up in any space, and the 125mm Uni-Q driver array delivers full-range sound when coupled with the built-in 6.5-inch bass driver. Install these KEF REFERENCE 1 speakers in a two-channel setup, or integrate them as rear channels in your home theater.
7	Klipsch Reference Premiere	74998	/images/klipsch.jpg	Enjoy your favorite music with this Klipsch Reference Premiere speakers.	Their vented tweeter design provides enhanced detail and clarity for vocals, and the 6.5-inch Cerametallic cone woofer creates punchy low frequencies with minimal distortion. These Klipsch Reference Premiere speakers have a compressed molded silicon face for a smooth frequency response and natural-sounding audio.
8	Martin Logan Motion	69998	/images/martinLogan.jpg	Fill your room with high-quality audio with this red walnut MartinLogan Motion Series bookshelf speaker.	The stiffened suspension and dust cap design improve the acoustic performance, while the Folded Motion XT tweeter adds detail to your music. This MartinLogan Motion Series bookshelf speaker has a 6.5-inch aluminum cone woofer to deliver thumping bass.
5	Definitive Technology Demand D11	113998	/images/defTech.jpg	Hear every note of your favorite songs from these Definitive Technology Demand bookshelf speakers.	The sleek design fits in easily with your sound setup, and the natural bead-blasted aluminum front baffle exudes a classic look in speakers. Three-dimensional sound imaging on these Definitive Technology Demand bookshelf speakers delivers impressive sound reproduction.
\.


--
-- Name: cartItems_cartItemId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."cartItems_cartItemId_seq"', 46, true);


--
-- Name: carts_cartId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."carts_cartId_seq"', 55, true);


--
-- Name: orders_orderId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."orders_orderId_seq"', 7, true);


--
-- Name: products_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: dev
--

SELECT pg_catalog.setval('public."products_productId_seq"', 8, true);


--
-- Name: cartItems cartItems_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public."cartItems"
    ADD CONSTRAINT "cartItems_pkey" PRIMARY KEY ("cartItemId");


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY ("cartId");


--
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: dev
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY ("productId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: dev
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

