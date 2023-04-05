import React from 'react';
import {Component} from 'react';
import {Navbar, NavbarToggler,NavbarBrand, Nav, NavItem, NavLink, Collapse  } from 'reactstrap';

class R049_ReactstrapNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {collapsed:false}
        //Navbar 리스트의 표시 상태를 state 변수로 선언해주고 초기값을 false로 할당해줌(리스트 전체 미표시하도록)
    }

    toggle=() =>{
        this.setState = ({collapsed:!this.state.collapsed})
    }

    render() {
        return (
            <>
            <Navbar color="faded" light> //전체 네비게이션 영역을 <Navbar></Navbar>로 묶는다.
                <NavbarBrand href="/" className='mr-auto'>Navbar</NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="mr-2"/>//<NavbarBrand></NavbarBrand>영역은 내비게이션에서 무조건 표시되는 영역임 -> 닫아도 보이는 곳
                //NavbarToggler를 누르면 화면 오른쪽에 표시되는 버튼 클릭시 toggle함수를 실행한다.(초기상태와 반대로 업데이트해주게 만듦) 
                <Collapse isOpen={this.state.collapsed} navbar>
                   <Nav navbar>
                    <NavItem>
                        <NavLink href="#">react</NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink href="http://example.com/">200</NavLink>
                    </NavItem>
                   </Nav>
                
                </Collapse> //Collaps 태그는 NavbarToggler onClick={this.toggle}의 toggle함수가 실행되게되면 표시또는 미표시된다. state, collapsed 값에 따라 동작함 
            </Navbar>
            </>
        )
    }


}

export default R049_ReactstrapNavbar;