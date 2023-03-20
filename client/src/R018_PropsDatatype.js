import React from "react";
import { Component} from "react";
import datatype from 'prop-types';
//자식 컴포넌트에서 props에 대한 자료형을 
class R018_PropsDatatype extends Component {
    render () {
        let {
            //지역변수를 선언하여 props로 전달된 값들을 (부모 컴포넌트에서 전달받은 값들)을 할당해준다. 
            String, Number, Boolean, Array, ObjectJson, Function
        } = this.props
        return (
            <div style={{padding:"0px"}}>
                <p> StringProps : {String}</p>
                <p>NumberRos : {Number}</p>
                <span>Booleanprops : {Boolean.toString()}</span>
                <p>ArrayProps:{Array.toString()}</p>
                <p>Object JsonProps : {Json.stringfy(ObjectJson)}</p>
                <p>Function Props : {Function}</p>
                //여기서 App.js에서 넘어온값들이 데이터타입과 맞는지를 검사하고 맞다면 그 값들을 출력해준다. 

                
            </div>
        )
    }
}
//이 컴퓨넌트에서 props에 대한 자료형들을 선언해놓았음 
R018_PropsDatatype.propTypes = {
    String : datatype.number,
    Number:datatype.number,
    Boolean : datatype.bool,
    Array : datatype.array,
    ObjectJson : datatype.object,
    Function : datatype.func,

}

export default R018_PropsDatatype;