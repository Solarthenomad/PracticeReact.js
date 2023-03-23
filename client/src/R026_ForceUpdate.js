import React, {Component} from 'react';

//this.state.변수명 =value와 같이 직접 state를 변경하면 render()함수를 호출하지 않으므로 화면에 보이는 state 값은 바뀌기 전상태로 남게 됨 
//이떄 SetState와마찬가지로 forceUpdate()함수로 화면을 새로고침하면 render()함수를 호출하여 변경된 값을 화면에 보여줄 수 있다. 

class R026_ForceUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString : 'react',
        }
    }

    StateChange =() =>{
        this.state.StateString = '리액트';
        this.forceUpdate();
    }

    render() {
        return (
            <div style = {{padding : "0px"}}>
                <button onClick={(e) => this.StateChange('direct',e)}>state 직접 변경</button><br/>
                [state 변경하기] StateString : {this.state.StateString} 
            </div>
        )
    }
}

export default R026_ForceUpdate;