import React from 'react';
import {
    ProfileContainer,
    ProfileWrapper,
    SectionHeader,
    AboutMeLayer,
    AboutMeCol,
    AboutMeHeader,
    AboutMePara,
    TimelineLayer,
    TimelineHeader,
    Timeline,
    TimelinePara
} from './ProfileElements';
import PicsAndFacts from './PicsAndFacts/PicsAndFacts';
import { Chrono } from 'react-chrono';
import { TimelineData } from '../../data/ProfileSection/TimelineData';

const ProfileSection = ({factsData, img}) => {
    return (

        <>
        <ProfileContainer>
            <ProfileWrapper>
                <SectionHeader>
                    Profile
                </SectionHeader>
                <PicsAndFacts data={factsData} img={img} />
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
                <TimelineLayer>
                    <TimelineHeader>
                        Timeline
                    </TimelineHeader>

                    <TimelinePara>
                        I believe each person has their own story to tell. Why not show you mine?
                    </TimelinePara>

                    {/* <Timeline>
                    <Chrono mode="VERTICAL_ALTERNATING" />
                    </Timeline> */}
                    <div style={{width: '800px', height: '950px'}}>
                        <Chrono mode='HORIZONTAL' items={TimelineData} slideShow={true} onRestartSlideshow={true} slideItemDuration={4500}/>
                    </div>
                </TimelineLayer>
            </ProfileWrapper>
        </ProfileContainer>
        </>
    )
}

const items = [{
    title: `Hello`,
    cardTitle: 'hmmm',
    cardSubtitle: 'yeahhmm'
}];

export default ProfileSection;
