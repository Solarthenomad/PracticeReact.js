import React, { Component } from "react";

class R007_LifeCycleEx extends Component{
    static getDerivedStateFromProps(props, state) {
        //이 페이지가 전달되는 App.js가 props임
        console.log('2.getDerivedStateFromProps Call : ' +props.prop_value);

        return {};
    
}