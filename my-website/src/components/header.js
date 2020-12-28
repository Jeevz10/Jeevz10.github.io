import React, { Component } from 'react';
import headerPic from '../images/jeevan_brooklyn_bridge.jpg';

class header extends Component {
    render() {
        return (
            <div>
                <img src={headerPic} alt="headerPic" />
            </div>
        )
    }
}

export default header;
