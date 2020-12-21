import React, { Component } from 'react';
import headerPic from '../images/jeevan_brooklyn_bridge.jpg';

export default class header extends Component {
    render() {
        return (
            <div>
                <img src={headerPic} alt="headerPic" />
            </div>
        )
    }
}
