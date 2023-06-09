import React, { Component } from "react";

class R007_LifeCycleEx extends Component{
    static getDerivedStateFromProps(props, state) {
        //이 페이지가 전달되는 App.js가 props임
        console.log('2.getDerivedStateFromProps Call : ' +props.prop_value);

        return {tmp_state:props.prop_value};
    
}

    constructor(props) {
    super(props);
    this.state ={};
    console.log('1.constructor Call');
}

    componentDidMount() {
      console.log('4.componentDidMount Call');
      console.log('5. tmp_state :' + this.state.tmp_state);

}
    render() {
      console.log('3.render Call');
      return(
        <h2>[This is componentDidMount Function]</h2>
    )
}

}

export default R007_LifeCycleEx;

//componentDidMount() : 가장 마지막으로 실행됨
//render 함수가 return되는 html 형식의 코드를 화면에 그려준 후 실행된다. 
//화면이 모두 그려진 후에 실행되어야 하는 이벤트 처리, 초기화에서 가장 많이 활용되는 함수이다. 
//tmp_state도 props.prop_value와 마찬가지로 app.js의 값을 가져올 수 있다.