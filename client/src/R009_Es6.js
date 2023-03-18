import React from "react";
import { Component } from "react";

class R009_Es6 extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    componentDidMount() {
        var jsString1 = '자바스크립트';
        var jsString2 = '입니다\n다음 줄입니다.';
        console.log(jsString1 + '문자열'+jsString2+'~');
        var Es6String1 = 'ES6';
         
    }
}