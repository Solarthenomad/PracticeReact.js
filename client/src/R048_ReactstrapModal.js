import React from "react";
import {Component} from "react";
import {Button, Modal, ModalGeader, ModalBody, ModalFooter} from "reactstrap";
//Modal : 사용자에게 원하는 시점에 알림 창을 띄어 피룡한 내용을 제공해줌
// 웹 브라우저에서 팝업 창을 차단할 수 없고 배경 페이지와 어울리는 디자인을 적용하는 것이 가능하다. 

class R048_ReactstrapModal extends Component {
   contructor(props) {
    super(props);
    this.state= {modal : false}
    // Modal 팝업의 초기 상태를 modal 변수로 설정해주고 이 변수의 초기값(constructor)을 false로 해준다.(미표시 상태)

   }

   toggle =() => {
    this.setState({modal : !this.state.modal})
    //Modal 팝업 표시를 반대로 변경함


   }

   render() {
    return (
        <>
        <Button color = "warning" onClick={this.toggle}>Modal 버튼</Button> //버튼을 누르면 toggle 함수가 실행되고 
        <Modal isOpen = {this.state.modal} fade = {true} toggle={this.toggle}  >
        //팝업으로 표시할 영역을 Modal로 묶음
        // isOpen 속성이 true이면 표시하고 false이면 미표시된다.
        //이때 애니메이션 주기가 가능한데 fade 속성을 true로 하게 되면 팝업창을 서서히 표시한다.
        //toggle 속성에 toggle을 주게 되는데, toggle 속성은 팝업 이외의 영역을 클릭했을 때에 대한 속성이다. 팝업 이외의 영역을 클릭했을 떄 toggle 함수가 실행되게 됨 
            <ModalHeader toggle={this.togglel}>Moddal Header
            //ModalHeader의 toggle 속성에 입력된 

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
