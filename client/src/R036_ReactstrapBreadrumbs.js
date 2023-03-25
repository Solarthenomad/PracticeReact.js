import React from "react";
import { Component } from "react";
import { Breadcrumb,BreadcrumbItem } from "reactstrap";

//BreadCrumbs : 페이지 위치경로를 지정한 웹 내비게이션 에 사용
//웹 사이트 상단에 표시되는 메뉴 리스트에 사용
//특정 메뉴를 선택하면 해당하는 웹 페이지로 넘어갈 수 있도록 함 
class R036_ReactstrapBreadcrumbs extends Component {
    render() {
        return (
            <div id = "top">
                <Breadcrumb tag = "nav" listTag="div">
                    //Breadcrumb 안에서 태그들을 생성하는 것이 가능함(tag="nav", listTag="div")를 넣어주었고, nav바 안에 div들이 list로 들어감 
                    <BreadcrumbItem tag="a" href="#top">Go_top</BreadcrumbItem>
                    //id=top으로 간다는 의미가 된 즉 위의 div id = top으로 간다는 것 
                    <BreadcrumbItem tag="a" href="#bottom">Go_Bottom</BreadcrumbItem>
                    //위에서 만든 div 태그들을 BreadcrumbItem으로 받아오고 a 태그를 넣어준다.(nav>div>a)로 넣어주는 것. 여기다가 href 속성을 넣어주어 이동할 태그의 링크를 넣어주는데, #bottom은 bottom이라는 태그의 id값의 내용으로 이동한다는 의미
                </Breadcrumb>
                <div id = "bottom" style = {{marginTop:"1000px"}}><span>bottom</span></div>
            </div>
        )
    }
}

export default R036_ReactstrapBreadcrumbs;