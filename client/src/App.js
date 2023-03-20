import React from 'react';
import './App.css';
import ImportComponent from './R003_ImportComponent';
import LifeCycleex from './R006_LifeCycleEx';
import LifeCycleEx from './R007_LifeCycleEx';
import LifeCycleEx8 from './R008_LifecycleEx';
import Es6 from './R009_Es6';
import SpreadOprator from './R0011_SpreadOperator';
import Jquery from './R016_Jquery';
import Props from './R017_Props';
import PropsDatatype from './R018_PropsDatatype';
import PropsBoolean from './R019_PropsBoolean';
import PropsObjVal from './R020_PropObjVal';
import Map from "./R015_Map";


//App.js와 같은 폴더 경로에 위치한 App.css 임포트하기 방법 
//만약 App.css가 App.js보다 한 단계 더 위의 상위 폴더에 위치한다면 ./../App.css를 해주어야 한다

function App() {
  //우리 프로젝트의 홈화면을 그려주는 것이 App.js.return 안에 메인 화면에 들어갈 요소들 넣어주기
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ImportComponent></ImportComponent>
      <LifeCycleex prop_value='FromApp.js'></LifeCycleex> 
      <Es6/>
      <SpreadOprator/>
      <Jquery/>
      <Map />
      <Props props_val = "This is Props"/>
      <PropsDatatype
         String = "react"
         Number = {200}
         Boolean = {1==1}
         Array = {[0,1,0]}
         ObjectJson = {{react:"리액트", twohundred:"200"}}
         Function = {console.log("FunctionProps : function!")}
         //문자열(String), 숫자(Number), 불리언, 배열, 객체(ObjectJson)
         //자식 컴포넌트에서 props에 대한 자료형을 선언해 놓으면 부모 컴포넌트에서 넘어오는 props 변수들의 자료형과 비교함
         //이때자료형이 일치하지 않는다면 결고 메세지로 알려주기 때문에 잘못된 데이터를확인하는 것이 가능하다. 
      />
      <PropsBoolean BooleanTrueFalse= {false}/>
      //Booleanprops 변수를 선언해주고 false값을 담아 props에 전달해준다. 
      <PropsBoolean BooleanTrueFalse/>
      //이것도 위처럼 PropsTrueFalse 변수에 선언하지만 위처럼 할당은 해주지 않고 props에 담아 하위 컴포넌트에 전달한다. 

      <PropsObjVal ObjectJson = {{react : "리액트", twohundred:"react"}}/>
      //ObjectJson변수와 키(react, twohundred)를 선언하고 value를 할당한 뒤 (리액트, 200) props에 담아 하위 컴포넌트(R020_PropObjVal)로 전달함 
      
      
    </div>
    //App.js에서 임포트한 component인 R006_LifecycleEx로 prop_value라는 변수를 전달한다.

  );
}

export default App;
//
