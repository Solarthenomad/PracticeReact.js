import React from 'react';
import { Component } from 'react';

class R027_ComponentClass extends Component {
    constructor(props) {
        super(props);
        this.state ={
            StateString : 'react',
            StateArrayObj : ['react', {react:'200'}]
        }
    }

    buttonClick =(type)=>{
        if(type === 'String') {
            this.setState({StateString : 'react'});

        }else {
            
        }

    }
}