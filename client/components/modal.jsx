import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.changeModalVisibility = this.changeModalVisibility.bind(this);
  }

  handleButtonClick() {
    this.setState({
      buttonClicked: true
    });
  }

  changeModalVisibility() {
    if (this.state.buttonClicked) {
      this.props.setModalView();
    }
  }

  modalVisible() {
    return this.props.modalView ? '' : 'hidden';
  }

  render() {
    const modalView = this.modalVisible();
    return (
      <div className={`${modalView} container`}>
        <div className={'row'}>
          <div>
            <div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog" >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header ">
                    <h5 className="modal-title m-auto" id="exampleModalLabel">Disclaimer</h5>
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
                    <button type="button" onClick={async () => {
                      await this.handleButtonClick();
                      await this.changeModalVisibility();
                    }} className="btn btn-primary d-block m-auto">I Understand</button>
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
