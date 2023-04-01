import React from "react";
import {Component} from "react";
import {Button, Modal, ModalGeader, ModalBody, ModalFooter} from "reactstrap";

class R048_ReactstrapModal extends Component {
   contructor(props) {
    super(props);
    this.state= {modal : false}

   }

   toggle =() => {
    this.setState({modal : !this.state.modal})


   }

   render() {
    return (
        <>
        <Button color = "warning" onClick={this.toggle}></Button>
        </>
    )
   }

export default R048_ReactstrapModal;