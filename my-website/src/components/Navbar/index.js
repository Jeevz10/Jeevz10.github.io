import React from 'react';
// hamburger menu, check out react-icons 
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> Dolla </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>

                        <NavItem>
                            <NavLinks to='Profile'>Profile</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='Skillsets'>Skillsets</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='Work Experience'>Work Experience</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='Projects'>Projects</NavLinks>
                        </NavItem>

                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to='/signin'> Sign In </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
