import React from "react";
import { Component } from "react";

class R017_Props extends Component {
    render() {
        let props_value = this.props.props_val; //this.props.뒤에 상위 컴포넌트인 App.js에서 전달받은 props 변수명을 붙이면 해당 데이터를 사용할수 있음
        props_value += 'from App.js';
        //데이터를 수정해야 하는 경우에 += 혹은 -=을 넣어서 수정할 수 있다. 
        //props 자체가 아닌 컴포넌트 내부 변수(props_value)에 옮겨 가공한다.
        // App.js에서 넘겨받은 문자열인(This is Props) 뒤에 새로운 문자열(from App.js)을 붙인다.This is Props from App.js
        return (
            <div>{props_value}</div>
            //가공한 문자열을 화면에 표시한다. 
        )
    }
}

export default R017_Props;