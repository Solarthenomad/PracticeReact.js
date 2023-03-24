//classs의 컴포넌트 종류 : Component, PureComponent
//PureComponent : 비교 대상의 값을 비교해 동일하지 않으면 변경이 발생했다봄
//불필요한 render()함수의 실행을 줄여 페이지 성능 향상
//두 컴포넌트 모두 어쩄든 props와 state의 변경에 따라서 render() 함수를 호출함

import React from 'react';
import { PureComponent } from 'react';

class R028_PureComponentClass extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            StateString : 'react', 
            StateArrayObj : ['react', {react : '200'}]
            //this.state에 변수(StateString, StateArrayIbj )와 객체가 포함된 배열변수(['react', {react:'200'}])를 선언하고 초깃값을 저장함
        }


    }
    buttonClick = (type)=>{
        if(type === 'String') {
            this.setState({StateString : 'react'});
        }
        //문자열 변경 버튼을 클릭하면 위에서 선언한 문자열 변수와 동일한 state 값
        else {
            this.setState({StateArrayObj : ['react', {react : '200'}]});
        }

    }

    render() {
        console.log('render() 실행');
        return (
            <div>
                <button onClick={e => this.buttonClick('String')}>문자열 변경</button>
                //buttonClick()함수의 인자로 받아오는 것은 위에서 
                <button onClick={e => this.buttonClick('ArrayObejct')}>객체 배열 변경</button>
            </div>
        )

    }
}

export default R028_PureComponentClass;