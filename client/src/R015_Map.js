import React from "react";
import { Component } from "react";
//배열 함수 map()은 forEach()와 마찬가지로 for 문에서 사용하던 순번과 배열의 크기 변수를 사용하지 않는다. 
//forEach()문과의 차이점은 map() 함수는 forEach() 함수와 달리 return을 사용해 반환값을 받을 수 있다. 

class R015_Map extends Component {

    componentDidMount() {
        var Map_Arr = [3,2,8,8];
        let Map_newArr = Map_Arr.map(x => x); //앞에서 생성한 배열 변수인 Map_Arr에서 map()함수를 사용하여 순서대로 하나씩 Map_Arr의 원소들을 가져온다. 이때 주의해야 하는게 하나씩 가져올 떄마다 콜백함수가 실행된다. 
        //콜백함수(Callback Function)란 파라미터로 (익명)함수를 전달받아, 함수의 내부에서 실행하는 함수이다.
        //따라서 가져온 값을 자동으로 x에 넣은 후 그대로 반환하여 x=>x 순서대로 쌓아놓은 뒤 한 번에 새로운 변수인 Map_newArr에 저장한다. 

        console.log("1. Map_newArr : ["+Map_newArr+"]")

        let Map_multiArr = Map_Arr.map(x => x*2); // 위와 비슷한 방식으로 기존 배열 Map_Arr의 요소에 순서대로 접근한 후 각각 2를 곱하여 새로운 배열인Map_multiArr에 저장하기까지를 한큐에 하고 있음  
        console.log("2. Map_multiArr : ["+Map_multiArr+"]");
        //배열 출력방법 

        var ObjArray = [{key:"react", value:"200"},
    {key:"리액트", value : "TwoHundred"}]; //배열안에 객체들을 생성하여 원소들로 저장한다. 

        let Map_ObjArr = ObjArray.map((obj, index) => { //ObjArray 안의 객체를 순서대로 가져와서(map) 하여 obj 안에 쌓는데 가져온 값들은 obj안에 넣고 콜백함수의 두 번째인자인 두 번째 인자인 index는 기존 배열의 인덱스와 동일함
            console.log((index + 3)+".obj :"+JSON.stringify(obj));
            //기존 배열에서 가져온 객체 값들을 순서대로 출력해준다. 
            var Obj = {}; //새로운 객체인 Obj를 선언해준다. 
            Obj[obj.key] = obj.value; //기존 객체인 ObjArray의 key, value 값을  새로운 객체인 Obj에 key, value값으로 저장해준다. 
            return Obj;
            //모든 반복이 끝나면 Map_objArr 안에 저장한다. 
        });
        console.log("5. Map_objArr : " + JSON.stringify(Map_ObjArr))
    }

    render() {
        return (
            <h2>[THIS IS Map]</h2>
        )
    }
}

export default R015_Map;