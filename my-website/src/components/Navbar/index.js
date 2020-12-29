import React from 'react';
// hamburger menu, check out react-icons 
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ headers, toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    {/* TODO */}
                    <NavLogo to='/'> Dolla </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {headers.map((header, index) => {
                            return (
                                <NavItem key={index}>
                                    <NavLinks to={header.path}> {header.title} </NavLinks>
                                </NavItem>
                            )
                        })}
                    </NavMenu>
                    {/* TODO */}
                    <NavBtn>
                        <NavBtnLink to='/signin'> Sign In </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
