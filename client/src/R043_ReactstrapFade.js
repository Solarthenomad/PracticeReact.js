import React from "react";
import { Component } from "react";
import { useEffect, useState } from "react";
import {Button, Fade} from 'reactstrap';


class R043_ReactstrapFade extends Component {
    
    constructor() {
        super(props);
        this.state= {fadeInOut : true}
    }

    toggle = () =>{
        this.setState({fadeInOut : !this.state.fadeInOut})
    }
    
    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tag="h1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Fade>

            </div>
        )
    }
}

export default R043_ReactstrapFade;