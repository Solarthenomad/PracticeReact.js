import React from "react";
import { Component } from "react";

//ForEach()는 for문에서 사용하던 순번과 배열의 크기 변수를 사용하지 않는다.
//배열의 처음부터 마지막 순번까지 모두 작업하는 경우 forEach()문을 사용하는 것이 간편함
//특정 순번에서만 배열값을 사용하거나 변겨앻야 하는 상황이라면 for문을 사용해야 한다. 

class R014_forEach extends Component {

    componentDidMount() {

        var For_Arr = [3,2,8,8];
        var For_newArr = [];

        for (var i =0; i<For_Arr.length; i++) {
            For_newArr.push(For_Arr[i]);
        }
        //for 문에서는 순번 변수(i)와 배열의 크기 (For_Arr.length)가 꼭 들어가야함! 순번을 0~1씩 증가시키고 배열의 크기보다 1이 작은 값이 될떄까지 새로운 변수인 For_newArr에 기존 변수의 원소들을 넣는다. (push)
        console.log("1. For_newArr : ["+For_newArr+"] ");

        var ForEach_Arr = [3,3,9,8];
        var ForEach_newArr = [];

        ForEach_Arr.forEach((result)=>{
            ForEach_newArr.push(result);
        })
        //forEach 함수는 위처럼 순번과 배열의 크기 정보를 사용하지 않고 그냥 ForEach_Arr의 값을 result등의 매개변수로 받아와 걍 넣음 
        console.log("2.ForEach_newArr : ["+ForEach_newArr+"]");
    }

    render() {
        return (
            <h2>[THIS IS ForEach]</h2>
        )
    }
}

export default R014_forEach;