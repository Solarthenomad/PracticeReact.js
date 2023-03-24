import React from "react";
import { Component } from "react";
import {Alert, UncontrolledAlert} from 'reactstrap';
//{Alert} : 기본 알림 기능 배찌
//{UncontrolledAlert} : 삭제 기능(x버튼)이 추가된 알림 기능 배찌

//Alerts 띄우기 (x창 달린 배찌 형식의 것)

class R034_ReactstrapAlerts extends Component {
    render() {
        return(
            <div>
                <Alert color = "light">
                    Simple Alert [color : light] 
                    //Simple Alert [color : light]라고 출력된 배찌가 화면에 보임
                </Alert>
                <UncontrolledAlert color="warning">
                    UncontrolledAlert [color : warning]
                </UncontrolledAlert>
            </div>
            //UncontrolledAlert [color : warning]이라는 문구가 그대로 써진 빼찌가 출력됨
        )
    }

}
