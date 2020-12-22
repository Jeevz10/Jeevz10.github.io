import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components/macro';
import { menuData } from '../data/MenuData';
import { Button } from './Button';

// class Navbar extends Component {

//     const Nav = styled.nav`
//         height: 60px
//     `


//     render() {
//         return (
//             <div>
//                 <nav className="navbar">
//                     <div className="navbar-container">
//                         <Link to="/" className="navbar-logo">
//                         Jeevan <i class="fas fa-portrait"/>
//                         </Link>
//                     </div>
//                 </nav>
//             </div>
//         )
//     }
// }

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: red;
`;

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`;

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}; 
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

function Navbar() {
    return (
        <Nav>
            <Logo to="/"> Jeevan </Logo>
            <MenuBars />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'> Contact Me </Button>
            </NavBtn>
        </Nav>
    )
}


// before i watched the video 

function previousNavbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                    Jeevan <i class="fas fa-portrait"/>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
