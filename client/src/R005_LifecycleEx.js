import React from 'react';
import { Component } from 'react';

class R005_LifecycleEx extends Component {
    constructor(props) { 
        super(props); //props를 받아오지 않으면 오류가 생긴다!
        this.state = {};
        console.log('1.constructor Call');
    }
    render() {
        return (
            <h2>{'This is Constructor functions!'}</h2>
        )
    }
}

//constructor(props) 함수는 생명주기 함수 중에서 가장 먼저 실행된다. + 처음 한 번 만 호출됨
//쓰는 이유 : 
//component 내부에서 사용되는 변수(state)를 선언해줄 때
// 부모객체에서 전달 받은 변수(props)를 초기화할 떄 : super을 통해 불러와서 초기화해준다. 

//콘솔창을 확인해보면, Constructor call -> render call 순서대로 불러와짐 