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
        <Button color = "warning" onClick={this.toggle}>Modal 버튼</Button>
        <Modal>
            <ModalHeader toggle={this.state.modal}>Moddal Header

            </ModalHeader>
            <ModalBody>
                The generated Lorem Ipsum is therefore always free from repetition.

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.toggle}>확인</Button>

                <Button color="secondary" onClick={this.toggle}>닫기</Button>

            </ModalFooter>
        </Modal>
        </>
    )
   }

export default R048_ReactstrapModal;
