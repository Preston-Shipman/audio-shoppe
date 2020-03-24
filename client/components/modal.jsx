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
            <div className="modal fade show justify-content-center d-flex" id="exampleModal" tabIndex="-1" role="dialog" >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header ">
                    <h5 className="modal-title text-justify text-center" id="exampleModalLabel">Disclaimer</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    ...
              </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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
