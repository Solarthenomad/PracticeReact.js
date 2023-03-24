import React, {Component} from 'react';

//this.state.변수명 = value와 같이 state를 직접 변경하면 render()함수를 바뀔 때에 대해서 호출이 불가능하므로 화면에 보이는 state 값은 바뀌기 전 상태로 남게 된다는 단점이 있음
//setState() 함수로 state를 변경해야 render() 함수를 재호출해 변경된 값을 화면에 보여주는 것이 가능하다.

class R025_SetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString : 'react',
            //StateString 변수의 초기값으로 react라는 문자열을 저장했음 
            //constructor()함수가 실행된 뒤 render() 함수에서 화면을 그림 
        }
    }

    StateChange = (flag) =>{
        if(flag =='direct') this.state.StateString = '리액트';
        if(flag == 'setstate')
        this.setState({StateString : '리액트'});
    }

    render() {
        return (
            <div style ={{padding : "0px"}}>
                <button onClick={(e)=>this.StateChange('direct',e)}>state 직접 변경</button>
                //state 직접 변경 버튼을 눌렀을 때 this.state.변수명=value문법으로 state를 직접 변경함. StateString 값은 '리액트'로 변경되지만 render()함수를 호출하지 않으므로 이전 값인 'react'로 표시됨
                <button onClick={(e)=>this.StateChange('setstate',e)}>setState로 변경</button>
                //setState()함수로 state를 변경한다. 이때 StateString 값은 '리액트'로 변경되고 render()함수를 다시 호출해 화면에는 변경된 값인 '리액트'가 표시된다.<br/>
                [state 변경하기]
                //문자열을 그려줄 때 []를 화면에 []안에 있는 문자열이 출력된다. StateString : {this.state.StateString}
                //this.state.StateString은 react라는 초기값을 가지고 있었음

            </div>
        )
    }
}

export default R025_SetState;