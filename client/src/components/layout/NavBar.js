import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../../style/main.css'


//style
const navStyle = {
    'zIndex': '99999'
};

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
            <Navbar style={ navStyle } dark={false} color="faded" light className="header-row" >
                <NavbarBrand href="/" className="mr-auto">myTinerary</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink href="">Components</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
    )
}

export default NavBar