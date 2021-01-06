import React from 'react';
import {
    ProfileContainer,
    ProfileWrapper,
    SectionHeader,
    TimelineLayer,
    TimelineHeader,
    Timeline,
    TimelinePara
} from './ProfileElements';
import PicsAndFacts from './PicsAndFacts/PicsAndFacts';
import { Chrono } from 'react-chrono';
import { TimelineData } from '../../data/ProfileSection/TimelineData';
import AboutMe from './AboutMe/AboutMe';

const ProfileSection = ({factsData, img}) => {
    return (

        <>
        <ProfileContainer>
            <ProfileWrapper>
                <SectionHeader>
                    Profile
                </SectionHeader>
                <PicsAndFacts data={factsData} img={img} />
                <AboutMe/>
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
