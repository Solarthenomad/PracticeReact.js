import { render } from "@testing-library/react";
import React  from "react";
import { Component } from "react";
import $ from 'jquery';


class R016_Jquery extends Component {
    input_alert =(e) =>{ //input_alert 함수를 지정해준다. button을 누르게 되면 발생하는 이벤트 함수로 inputId의 값이 value로 저장된다. :val()
        var input_val = $('inputId').val();
        alert(input_val);
    }

    render() {
        return (
            <div>
                <h2>[This is Jquery]</h2>
                <input id="inputId" name="inputName" /> //화면 왼쪽에 보이는 버튼으로 값을 입력하면 input 태그의 value에 저장된다. 
                <button id = "buttonId" onClick={e => this.input_alert(e)}>Jquery Button</button>
                //button을 누르면 input_alert함수를 호출하는 것 
            </div>
        )
    }
}

export default R016_Jquery;