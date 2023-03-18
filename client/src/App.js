import React from 'react';
import './App.css';
import ImportComponent from './R003_ImportComponent';
import LifeCycleex from './R006_LifeCycleEx';
import LifeCycleEx from './R007_LifeCycleEx';

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
      
    </div>
    //App.js에서 임포트한 component인 R006_LifecycleEx로 prop_value라는 변수를 전달한다.

  );
}

export default App;
