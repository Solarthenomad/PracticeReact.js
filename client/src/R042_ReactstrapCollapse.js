import React from "react";
import {Component} from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
//Collapse : 특정 영역을 펼치고 숨기기
//버튼이벹느를 이용해서 펼치고(show() 내장함수) 숨기기(hide() 내장함수)

class R042_ReactstrapCollaase extends Component {
    render() {
        return (
            <div>
                <Button color = "warning" id="toggle">
                    //태그의 toggler 속성으로 버튼 id를 지정해준다. 
                    펼치기/접기
                </Button>
                <UncontrolledCollapse toggler="#toggle"> //toggler 속성에 내장함수인 toggle을 호출할 수 있도록 #toggle을 넣어준다.(UncontrolledCollapse의 내장함수이며 펼치기 숨기기 가능하게 하는 함수)
                    <Card>
                        <CardBody>
                            React 200
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        )
    }
}

export default R042_ReactstrapCollaase;