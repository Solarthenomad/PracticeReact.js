import React from 'react';
import { Component } from 'react';
import datatype from 'prop-types';

class R024_ReactState extends Component {
    constructor(props) {
        //constructor : 생명주기 함수 중 가장 먼저 실행됨. state 변수의 초기값을 정의해야 한다.
        //this.state{}에서 StateString 변수에는 props로 전달한 reactString 값을 저장하고
        //StateNumber 변수에는 숫자 200을 저장한다. 
        super(props);
        this.state = {
            StateString : this.props.reactString,
            StateNumber :200,
        }
    }

    render() {
        return (
            <div style ={{padding : "0px"}}>
                {this.state.StateString}{this.state.StateNumber}
                //this.state 변수명 문법으로 state 변수에 접근하여 state 값을 화면 그대로 출력함
            </div>
        )
    }
}

R024_ReactState.propTypes = {
    StateString : datatype.string,
    StateNumber:datatype.number,
    
    

}

//reactString 이라는 변수를 선언하고 react라는 문자열을 할당한 후 props에 담아 하위 컴포넌트에 전달함

export default R024_ReactState;