import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.executeFunction = this.executeFunction.bind(this)
  }
  executeFunction(){
    console.log('ta pohaaa')
    this.props.sendFunction()
    this.toggle();
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button onClick = {this.toggle} className="btn-fill" color={this.props.color}>{this.props.name}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            {(this.props.context)? this.props.context : "Nothing there"}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(this.executeFunction)}>Confirma</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;