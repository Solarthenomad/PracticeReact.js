import React, { Component } from 'react';

class R006_LifeCycleEx extends Component {

    static getDerivedStateFromProps(props, state) {
        //이 페이지가 전달되는 App.js가 props임
        console.log('2.getDerivedStateFromProps Call : ' +props.prop_value);

        return {};
    }

    constructor(props) {
        super(props);
        this.state ={};
        console.log('1. constructor Call');
    }
    render() {
        console.log('3.render Call');
        return(
            <h2>[This is Constructor function]</h2>
        )
    }
}

//getDerviedStateFromProps(props, state) 함수는 constructor () 함수 다음으로 실행되는 함수이다. 
//컴포넌트가 새로운 props를 받게 되었을 때 state를 변경해준다.
//props.propvalue = App.js의 FromApp.js로 props.prop_value로 app.js의 값을 가져올 수 있다.  
//getDerviedStateFromProps Call:FromApp.js가 콘솔에 찍히게 됨 

//props의 값을 가져오는 함수라고 이해하면 된다!
