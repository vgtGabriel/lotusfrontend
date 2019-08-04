import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button onClick = {this.toggle}>ok</Button>
        <Modal isOpen={this.props.modal || this.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            {(this.props.context)? this.props.context : "Nothing there"}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Confirmar</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Alert;