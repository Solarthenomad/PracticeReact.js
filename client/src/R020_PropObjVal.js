import React, {Component} from 'react';
import datatype from 'prop-types';
//
class R020_PropsObjVal extends Component{
    render() {
        //함수 내에서 지역 변수를 선언해 props로 전달한 값을 할당해준다. 

        let {
            ObjectJson 
        } = this.props
        return (
            <div style = {{padding : "0px"}}>
                //JSON.stringify : JavaScript 값이나 객체를 JSON 문자열로 변환해야함 
                {JSON.stringify(ObjectJson)}  // key와 value를 화면에 출력해준다. 

            </div>
        )
    }
    

}

R020_PropsObjVal.propTypes = {
    ObjectJson : datatype.shape({ //shape 유형을 사용하여 객체 변수로 지정한 ObjectJson의 내부 key값(react, twohundred)에 선언한다. twohundred가 문자열("200")로 전달됐지만, 자료형이 number로 선언하였기 때문에 타입이 일치하지 않아 경고메세지가 뜬다. 
        react : datatype.string,
        twohundred : datatype.number
    })
}

export default R020_PropsObjVal;