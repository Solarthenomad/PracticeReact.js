import React , {Component} from 'react';

//props의 자식 Component에 node를 전달하기
class R023_PropsNode extends Component {
    render() {
        return (
            <div style = {{padding : "0px"}}>
                {this.props.children}
                //상위 컴포넌트에서 전달한 노드는 this.props.children이라는 문법으로 접근해서 사용이 가능하다.
            </div>
        )
    }
}


export default R023_PropsNode;

//node : html문서를 구성하는 포괄적 개념으로 문서 요소(태그), 속성(id, class), 텍스트(그냥 글자), 주석 등이 있다.