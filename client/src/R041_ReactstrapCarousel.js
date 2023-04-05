import React from 'react';
import {Component} from 'react';
import {UncontrolledCarousel} from 'reactstrap';

//카로우셀 : 슬라이드를 자동으로 회전시키는 기능을 함
// 이미지, 텍스트, 버튼으로 이루어진 슬라이드를 일정 시간 단위로 다음 슬라이드로 이동시킴 

const items = [  //슬라이드에서 사용할 친구들을 배열로 만들어줌
    {
        src : 'http://bitly.kr/QUnjxAodA', //슬라이드 이미지 경로
        altText : '슬라이드 1 이미지 대체 문구',
        caption : '슬라이드1 설명',
        header : '슬라이드1 제목',
    },
    {
        src : 'http://bitly.kr/n3vBOWt9g',
        altText : '슬라이드2 이미지 대체 문구',
        caption : '슬라이드2 설명',
        header : '슬라이드2 제목',


    },
    {
        src : 'http://bitly.kr/uzWLMeIJh',
        altText : '슬라이드3 이미지 대체 문구',
        caption : '슬라이드 3 설명',
        header : '슬라이드3 제목',
    }

];

class R041_ReactstrapCarousel extends Component {
    render() {
        return (
            <UncontrolledCarousel items= {items}/> //<UncontrolledCarousel>에 배열 형태의 데이터({items})를 넣어주게 되면 carousel이 필요한 html 태그를 그려주고 css와 function을 적용해준다.
        )
    }
}

export default R041_ReactstrapCarousel;