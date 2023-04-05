import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

//ListGroup과 ListGroupItem 태그는 html 태그로 <ul>, <li>로 변환되게 된다. 
//버튼과 링크 등의 별도의 태그를 추가하지 않고도 속성값을 주어서 간편하게 추가적 속성 사용 가능 
class R047_ReactstrapListGroup extends Component {

    render() {
        return (
            <>
                <ListGroup>
                    <ListGroupItem color="danger" className="justify-content-between">
                        <Badge pill>200</Badge>

                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">disabled</ListGroupItem>
                    <ListGroupItem tag="a" href="http://example.com">
                        Link
                    </ListGroupItem>
                    <ListGroupItem tag="button" action onClick={e=>alert("button")}>Button</ListGroupItem>
                </ListGroup>
                //tag 속성에 a, button을 주게 되면 링크나 버튼으로 리스트 사용이 가능해진다. 
            </>
        )
    }
}

export default R047_ReactstrapListGroup;

