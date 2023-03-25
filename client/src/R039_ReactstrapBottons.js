import React from 'react';
import { Component } from 'react';
import {Button} from 'reactstrap';

//Bottons 패키지는 Button 태그의 color 속성에 약속된 문자열을 넣으면 용도에 맞는 색상을 준다. 

class R039_ReactstrapBottons extends Component {

    render() {
        return (
            <div style ={{padding : "0px"}}>
                <Button color = "primary">blue</Button>
                <Button color = "info">teal</Button>
                <Button color = "success">green</Button>
                <Button color = "warning">yellow</Button>
                <Button color = "danger">red</Button>
                <Button></Button>
                <Button></Button>
                <Button></Button>
            </div>
        )
    }
}