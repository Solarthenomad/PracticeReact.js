import React, {Component} from 'react';
import {inputGroup, inputGroupAddon, inputGroupText, Input, Button, InputGroupText, InputGroup} from 'reactstrap';

class R045_ReactstrapInputGroup extends Component {
    render() {
        return (
            <>
            <InputGroup>
               <Input placeholder="userid" />
                 <inputGroupAddon addonType="append">
                    <InputGroupText>@reactmail.com</InputGroupText>
                 </inputGroupAddon>
            </InputGroup>
            <InputGroup>
               <InputGroupAddon addonType="prepend">
                  <Button>버튼</Button>
               </InputGroupAddon>
               <Input />
            </InputGroup>
            
            </>
        )
    }
}

export default R045_ReactstrapInputGroup;