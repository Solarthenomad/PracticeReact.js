import React from 'react';
import { Component } from 'react';
import datatype from 'prop-types';

//props의 자료형을 선언하게 되면 prop-types를 사용한다.
//자료형 설정 대신 isRequired를 조건으로 추가하게 되면, 변수값이 없는 경우에 경고 메세지가 뜰 수 있다. 

class R021_PropsRequired extends Component {
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props
        return (
            <div style= {{padding : "0px;"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }

}

R021_PropsRequired.prototype = {
    ReactString : datatype.isRequired,
}

export default R021_PropsRequired;