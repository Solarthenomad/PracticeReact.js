import React from "react";
import { Component } from "react";

class R013_ArrowFunction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowFuc : 'React200',
            num:3
        };
    }

    componentDidMount() {
        Function(1);
        this.Function2(1,1);
        this.Function3(1,3);
        this.Function4();
        this.Function5(0,2,3);

        function Function1(num1) {
            return console.log(num1+'.Es5 function');
        }
    }

    Function2 = (num1, num2) =>{
        let num3 = num1 + num2;
        console.log(num3 +'.Arrow Function : ' + this.state.arrowFuc);
    }

    Function3() {
        var this_bind = this;
        setTimeout(function() {
            console.log(this_bind.state.num+'.Es5 ')
        })
    }
}