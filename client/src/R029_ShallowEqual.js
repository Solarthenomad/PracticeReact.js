import React from "react";
import { Component } from "react";
import {shallowEqualArrays} from 'shallow-equal';

class R029_ShallowEqual extends Component {
    constructor(props) {
        super(props);
        this.state = {StateString : 'react'};
    }
    shouldComponentUpdate(nextProps, nextState){
        return !shallowEqualArrays(this.state, nextState)
    }
}


export default R029_ShallowEqual;