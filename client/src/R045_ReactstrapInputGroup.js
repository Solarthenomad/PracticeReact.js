import React, {Component} from 'react';
import {inputGroup, inputGroupAddon, inputGroupText, Input, Button, InputGroupText, InputGroup} from 'reactstrap';
//inputGroup : 여러 개의 태그를 하나의 input 그룹으로 묶어서 사용할 수 있도록 한다. 
class R045_ReactstrapInputGroup extends Component {
    render() {
        return (
            <>
            <InputGroup>
               <Input placeholder="userid" />
                 <inputGroupAddon addonType="append"> //addonType="append"를 넣어주게 되면 입력 필드의 우측에 추가 콘텐츠를 넣을 수 있는 컴포넌트가 된다. 
                    <InputGroupText>@reactmail.com</InputGroupText>
                 </inputGroupAddon>
            </InputGroup>
            <InputGroup>
               <InputGroupAddon addonType="prepend">
               //addonType="prepend"를 넣어주게 되면 입력 필드의 우측에 추가 콘텐츠를 넣을 수 있는 컴포넌트가 된다. 
                  <Button>버튼</Button>
               </InputGroupAddon>
               <Input />
            </InputGroup>
            
            </>
        )
    }
}

export default R045_ReactstrapInputGroup;