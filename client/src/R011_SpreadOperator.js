import React from "react";
import { Component } from "react";

class R0011_SpreadOperator extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //javascript Array 생성해보기
        var varArray1 = ['num1', 'num2'];
        var varArray2 = ['num3', 'num4'];
        var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];
        //var sumVarArr = [].concat(varArray1, varArray2); 와 같다.
        console.log('1.sumVarArr : ' + sumVarArr);

        //ES6식 Array 
        let sumLetArr = [...varArray1, ...varArray2];
        console.log('2.sumLetArr:' + sumLetArr );
        const [sum1, sum2, ...remain] = sumLetArr;
        console.log('3.sum1 :' + sum1 +',sum2 : '+sum2+',remain :' + remain);

        var varObj1 = {key1 : 'val1', key2 : 'val2'};
        var varObj2 = {kry2 : 'new2', key3 : 'val3'};
        //javascript Object
        var sumVarObj = Object.assign({},varObj1, varObj2);
        console.log('4.sumVarObj:' + JSON.stringify(sumVarObj));
        //ES6 Object방식으로 표현하기
        var sumLetObj = {...varObj1, ...varObj2};
        console.log('5.sumLetObj :' + JSON.stringify(sumLetObj));
        var {key1 , key3, ...others} =sumLetObj;
        console.log('6.key1 : ' + key1+ ',key3 :' +key3 + ',others :' +JSON.stringify(others));

    }
    render() {
        return(
            <h2>[THIS IS SpreadOprator]</h2>
        )
    }
}

export default R0011_SpreadOperator;

//기존 ES5에서 배열 2개를 합치기 위해서는 배열 각각의 원소들을 인덱스로 가져와서 합쳐주거나,
//var sumVarArr = [].concat(varArray1, varArray2); [].concat()함수 사용하여 합침 

//ES6에서는 전개연산자(...)을 합치고자 하는 각각의 배열명 앞에 붙여  마침표 세개(...)를 배열명 앞에 붙여서 여러 개의 배열을 하나로 합침 
// let sumLetArr = [...varArray1, ...varArray2];
//const [sum1, sum2, ...remain] = sumLetArr;
//