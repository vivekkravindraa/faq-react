import React from 'react';
import { Modal } from 'react-bootstrap';

class ModalAll extends React.Component {
  constructor(props) {
    super(props);
    this.inputText = React.createRef();
  }

  registerHandle = () => {
    console.log(this.inputText.current.value);
  }

  render() {
    return (
      <Modal
        {...this.props}
        bsSize="small"
        aria-labelledby="contained-modal-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-sm"
          >
            New Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="nameCategory">{this.props.text}</label>
              <input
                ref={this.inputText}
                type="text"
                className="form-control"
                id="nameCategory"
              />
          </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.registerHandle}
          >
            Register
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.onHide}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    );
  };
};

export default ModalAll;
