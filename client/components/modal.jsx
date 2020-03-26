import React from 'react';
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    };
  }

  render() {
      return (
          <div className={'container'}>
            <div className={'row'}>
              <div>
                <div className="modal fade show backdrop focus" id="disclaimerModal" tabIndex="-1" role="dialog" >
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header ">
                        <h5 className="modal-title d-block m-auto" id="disclaimerModalLabel">Disclaimer</h5>
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
                        <div onClick={() => this.hideModal()} className="btn btn-primary d-block m-auto" data-dismiss="modal">I Understand</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
  }
}

export default Modal;
