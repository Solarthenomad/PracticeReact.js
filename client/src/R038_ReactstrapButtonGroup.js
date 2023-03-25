// 비슷한 형태와 기능들의 버튼은 그룹으로 묶어 관리해주어야 한다. 

import React from "react";
import { Component } from "react";
import {Button, ButtonGroup} from 'reactstrap';

class R038_ReactstrapButtonGroup extends Component {
    constructor (props) {
        super(props);
        this.state = {number : 10};
    }

    move = (type, e) => {
        if(type === "Left") {
            this.setState({number : this.state.number -1})
        } else if(type ==="Right"){
            this.setState({number : this.state.number + 1})
        }


    };
    //onClick = {e => this.move}에서 호출되는 함수로 move는 type값을 아래에서 파라미터로 받고, Left, Right를 type 파라미터로 받게 되면 현재 state를 변경한다 .

    render() {
        return (
            <div stype = {{padding : "0px"}}>
                <ButtonGroup style = {{padding : "0px"}}>
                   <Button onClick ={e => this.move('Left')}>Left</Button>
                   <Button onClick = {e => this.move('Middle')}>Middle</Button>
                   <Button onClick = {e => this.move('Right')}>Right</Button>
                </ButtonGroup><br/>
                {this.state.number}
            </div>
            //비슷한 기능을 하는 버튼들을 <ButtonGroup>으로묶어서 사용하는데, 각각의 Button을 누를 때마다 move() 함수를 호출한다. (move함수는 위에서 정의함 )

        )
    }
}

export default R038_ReactstrapButtonGroup;
