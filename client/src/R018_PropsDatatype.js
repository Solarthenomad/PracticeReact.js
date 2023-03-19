import React from "react";
import { Component} from "react";
import datatype from 'prop-types';

class R018_PropsDatatype extends Component {
    render () {
        let {
            String, Number, Boolean, Array, Object Json, Function
        } = this.props
        return (
            <div style={{padding:"0px"}}>
                <p> StringProps : {String}</p>
                
            </div>
        )
    }
}