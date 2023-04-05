import React from "react";
import { Component } from "react";
import { useEffect, useState } from "react";
import {Button, Fade} from 'reactstrap';
//Fade : 특정 영역을 서서히 나타내고 숨김
//버튼으로 이벤트를 주어 Fade를 제어함


class R043_ReactstrapFade extends Component {
    
    constructor(props) {
        super(props);
        this.state= {fadeInOut : true}
        // <Fade>태그 영역의 표시 상태를 state로 선언하고(this.state.fadeInOut)  ,그 fadeInOut를 true라고 해준다. 
    }

    toggle = () =>{
        this.setState({fadeInOut : !this.state.fadeInOut})
    }
    //toggle이 this를 통하여 button의 onClick 함수에 접근하게 됨(onClick에서 this.toggle로 호출하기 때문에) 
    //setState() 함수를 호출하여 React 컴포넌트의 상태를 업데이트
    // fadeInout 상태가 이전 값과 반대로 바뀌게 됨 : toggle함수를 호출하게 되면 
    //toggle함수는 onClick이 호출함 
    
    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tag="h1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Fade>

            </div>
        )
    }
}

export default R043_ReactstrapFade;