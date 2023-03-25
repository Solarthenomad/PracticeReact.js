import React from "react";
import { Component } from "react";
import {ButtonDropdown, DropdownToggle, DropdwonItem, DropdownMenu} from 'reactstrap;'

//Dropdown 패키지 : 대표 메뉴를 클릭하면 -> 하위 메뉴 리스트 표시 (여기서 이 하위 메뉴리스트 상태가 표시인지 미표시인지도 정보 필요함)

class R037_ReactstrapDropdown extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            DropdownOpen : false  //Dropdownopen 변수를 설정하고 false 값을 넣음 (not)의 값만 지정해준 것 + constructor을 통해서 초기값을 설정해줌 

        }
    }

    toggle = () =>{
        this.setState({dropdownopen : !this.state.DropdownOpen})
    }

    render() {
        return (
            <ButtonDropdown isOpen = {this.state.DropdownOpen} toggle = {this.toggle}>
                //isOpen 기능은 ButtonDropdown에 특화된, 버튼을 누르면 열수있는 기능이고, 
                <DropdownToggle caret>
                    버튼 Dropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdwonItem header> 헤더 부분</DropdwonItem>
                    <DropdwonItem disabled>비활성화 버튼</DropdwonItem>
                    <a href="http://example.com/"><DropdwonItem>웹 사이트 이동 소메뉴도 넣어봄</DropdwonItem></a>
                    <DropdwonItem onClick={e => alert("Alert버튼")}>
                        이걸 누르면 Alert창이 뜹니다. 

                    </DropdwonItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

export default R037_ReactstrapDropdown;