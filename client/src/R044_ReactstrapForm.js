import React from "react";
import { Component } from "react";
import {Form, Label, Input, Row, Col, FormGroup} from 'reactstrap';
//Form, FormGroup: html form 태그에 깔끔하고 정리된 탬플릿을 적용함 

class R044_ReactstrapForm extends Component {
    render() {
        return (
            <Form>  //Form : 하나의 폼 단위로 사용될 영역
                <Label for = "exampleGender">gender</Label>
                <Input type = "select" bsSize="sm">  //bsSize : Input 크기 지정
                    <option>no select</option>
                    <option>woman</option>
                    <option>man</option>
                </Input>
                <Row form>
                    //Row : 태그들을 줄 단위로 묶어줌(가로로 정렬할 수 있도록 함)
                    //Col : 이 가로로 묶인 영역들이 각각 어느 정도의 영역을 차지할지 결정해주고, 단위는 md임
                    //md 속성의 합은 모두 12가 되어야 한다.
                    
                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleAddress">address</Label>
                            <Input type="text" name="address" id="address" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                       <FormGroup>
                           <Label for=""></Label>
                           <Input />
                       </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for = "exampleAge">age</Label>
                            <Input type="text" name="mobile" id=""></Input>
                        </FormGroup>

                    </Col>
                </Row>
            </Form>
        )
    }





}

export default R044_ReactstrapForm;