import React, {Component} from 'react';
import {Jumbotron, Button} from 'reactstrap';

//Jumbotron : 대형 전광판. 넓은 영역에서 눈에 띄게 정보를 표시한다. 

class R046_ReactstrapJumbotron extends Component {
    render() {
        return (
            <>
                <Jumbotron style={{backgroundColor:"R038"}}>
                    <h1 className="display-4">REact 200</h1>
                    <p className="h4">Contrary to popular belief, lorem Ipsum is not simply random text.</p>
                    <hr className="my-2"/>
                    <p>There are many variations of passages of Lorem Ipsum available.</p>
                    <p className = "lead">
                        <Button color="danger">Go Detail</Button>

                    </p>


                </Jumbotron>
            </>
        )
    }
}

export default R046_ReactstrapJumbotron;