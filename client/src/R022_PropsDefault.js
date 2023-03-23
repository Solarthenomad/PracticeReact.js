import React from 'react';
import { Component } from 'react';
import datatype from 'prop-types';
import R021_PropsRequired from './R021_PropsRequired';

class PropsDefault extends Component {

    render(){  
        let {ReactString, ReactNumber} = this.props;  //let 지역변수를 선언하여 props로 전달해준다. 
      return (
        <div style ={{padding : "0px"}}>
            {ReactString}{ReactNumber}  
            //ReactNumber만 전달받았기 때문에 ReactNumber의 변수값만 출력된다.
        </div>

      )

    }

   

    
}

R021_PropsRequired.propTypes = {
    ReactString : datatype.isRequired, //ReactString이라는 프로퍼티를 필수값을 지정한다. 하지만 상위 컴포넌트에서 ReactString이라는 변수를 전달하지 않았기 때문에 경고메세지가 발생함 
    
}
  

export default R021_PropsRequired;