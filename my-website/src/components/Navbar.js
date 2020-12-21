import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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


function Navbar() {
    return (
        <Nav>
            <Logo>Jeevan </Logo>
            <MenuBars />
            <NavMenu>

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
