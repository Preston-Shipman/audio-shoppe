import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: false
    };
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'row'}>
          <div>
            <div className="modal fade show d-flex" id="exampleModal" tabIndex="-1" role="dialog" >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header ">
                    <h5 className="modal-title text-justify text-center" id="exampleModalLabel">Disclaimer</h5>
                  </div>
                  <div className="modal-body">
                    <ul>
                      <li> This website is for demonstration purposes only. </li>
                      <li> Please do not enter any real info. </li>
                      <li> Items you see are not actually for sale nothing will be bought! </li>
                      <li> Thanks for reading and enjoy! </li>
                    </ul>
                  </div>
                  <div className="modal-footer">
                    <input type="checkbox" aria-label="Checkbox for following text input"></input>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
