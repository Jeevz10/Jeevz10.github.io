import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';

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
    background: red;
`;

const Logo = styled(Link)`
    colour: #fff;
`;

const MenuBars = styled.i``;

const NavMenu = styled.div``;

const NavMenuLinks = styled(Link)`
    colour: #fff; 
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
        </Nav>
    )
}

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
