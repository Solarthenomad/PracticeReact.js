import React, {Component} from 'react';

class R008_LifecycleEx extends Component {
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
   
    shouldComponentUpdate(props, state) {
        console.log('6.shouldComponentUpdate Call / tmp_state2=' + state.tmp_state2);
        return state.tmp_state2
    }

    componentDidMount() {
      console.log('4.componentDidMount Call');
      console.log('5. tmp_state :' + this.state.tmp_state);

}
    render() {
      console.log('3.render Call');
      return(
        <h2>[This is shouldComponentUpdate Function]</h2>
    )
}

    

}

export default R008_LifecycleEx;

//componentDidMount() : 생성단계의 생명주기 함수 중 가장 마지막에 실행된다. 
//tmp_state2 : state변수에 true라는 boolean 유형의 데이터를 세팅함
//setState() 변수의 선언과 초기화를 동시에 실행함

//this.setState() : state 변경 발생시키는 함수
// state 변경이 발생하게 되면 변경 단계의 생명 주기 함수인 shouldComponentUpdate()가 실행되게 된다. boolean 유형의 데이터를 반환하고 return값이 true일 경우에 render()함수를 한 번 더 호출하게 됨 
