import React from 'react';
import { Component } from 'react';

class R004_LifeCycleEx extends Component{
    render() { // render()은 return되는 html 코드를 화면에 그려된다. 화면을 그려내야 하는 시점에 자동으로 호출
        console.log('3.redner Call');
        return (
            <h2>{'This is Render Function!'}</h2>
        )
    }
}

export default R004_LifeCycleEx;