import React, {Component} from 'react';
import {Badge, Button} from 'reactstrap';

class R035_ReactstrapBadges extends Component {
    render() {
        return(
        <div>

            <h1>PRODUCT NAME 
                <Badge color ="secondary" >
                    hit
                </Badge>
                //텍스트 옆에 배찌를 추가하게 되면 상품 hit, 세일 상품(sale)등의 부가설명 가능
            </h1>
            <Button color = "light" outline>
                Accessor <Badge color = "dark">4</Badge>
                //Accessor : 접속자수(버튼 안 배찌)
                //접속자수, 메세지 수와 같은 속성 수치 표현할 때 button안에 badge 넣기 좋음 
            </Button>
            <Badge color ="danger" pill>pill</Badge>
            //pill 속성은 테두리 둥글게 적용함 
            <Badge href="http://www.example.com" >
                GoLink

            </Badge>
        </div>
        )
    }
}

export default R035_ReactstrapBadges;