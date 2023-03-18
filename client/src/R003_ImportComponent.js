//component : 특정 코드 뭉치를 다른 부분에 이식하거나 재사용하기 위한 코드 뭉치 

import React from 'react';
import {Component} from 'react';

class R003_ImportComponent extends Component { //임포트한 Component를 R003_ImportComponent가 상속받음
    render() {//return된 html 코드를 render() 함수를 사용하여 화면에 표시한다.
        return (
            <h2>{ 'THIS IS IMPORTED COMPONENT' }</h2>
            //문자열을 JSX 문법으로 사용하고 있기 때문에 따옴표로 감싸주어야함 
        )
    }
}

export default R003_ImportComponent;