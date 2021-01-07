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
import Timeline from './TimelineSection/Timeline';
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
                <Timeline data={TimelineData} />
            </ProfileWrapper>
        </ProfileContainer>
        </>
    )
}

export default ProfileSection;
