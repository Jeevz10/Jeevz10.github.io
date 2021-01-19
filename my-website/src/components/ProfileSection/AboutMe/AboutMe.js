import React from 'react';
import {
    AboutMeLayer,
    AboutMeHeader,
    AboutMeCol,
    AboutMePara
} from './AboutMeElements';

const AboutMe = () => {
    return (
        <AboutMeLayer>
            <AboutMeCol>
                {/* TODO settle fonts size*/}
                <AboutMeHeader>
                    A little something about me...
                </AboutMeHeader>
                <AboutMePara>
                    Hey there! Firstly, thank you for stumbling upon my website! I created this because not only did I want to 
                    learn the React Library, I wanted to give people a good idea of who I am before they actually get to know me!
                </AboutMePara>
            </AboutMeCol>
        </AboutMeLayer>
    )
}

export default AboutMe;
