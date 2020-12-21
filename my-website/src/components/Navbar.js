import React, { useState }from 'react'
import { Link } from 'react-router-dom';

function navbar() {
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

export default navbar
