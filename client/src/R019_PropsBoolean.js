import React from "react";
import { Component } from "react";


class PropsBoolean extends Component {
    render() {
        let {
            BooleanTrueFalse  
        } = this.props// this.props를 통해 전달된 값을 BooleanTrueFalse에 할당해준다. 
        return (
            <div>
                //{BooleanTrueFalse ? '2.' : '1.'}이렇게 쓰는 거 디게 중요함... BooleanTrueFalse가 참이면 2를 반환해주고 아니면 1를 반환해준다는 의미. ? :는 if print else print 구문과 똑같음   
                {BooleanTrueFalse ? '2.' : '1.'}
                {BooleanTrueFalse.toString()}
                //Boolena 변수는 직접 출력이 불가능하므로 toString() 함수를 사용해 문자열로 변환하여 출력한다. false true로 숫자 옆에다가 출력함
            </div>
        )
    }

    
}