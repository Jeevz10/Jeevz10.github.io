import React from 'react';
// hamburger menu, check out react-icons 
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ headers, toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    {/* TODO I didnt see a need for logo but an idea was to insert a jeevan gif*/}
                    {/* <NavLogo to='/'> Jeev </NavLogo> */}
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
                    {/* TODO  I was thinking this to be a contact me button */}
                    {/* <NavBtn>
                        <NavBtnLink to='/signin'> Contact Me </NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
