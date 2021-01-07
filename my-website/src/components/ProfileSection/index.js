import React from 'react';
import {
    ProfileContainer,
    ProfileWrapper,
    SectionHeader,
} from './ProfileElements';
import PicsAndFacts from './PicsAndFacts/PicsAndFacts';
import { TimelineData } from '../../data/ProfileSection/TimelineData';
import TimelineChrono from './TimelineSection/TimelineChrono/TimelineChrono';
import TimelineVertical from './TimelineSection/TimelineVertical/TimelineVertical';
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
                {/* <TimelineChrono data={TimelineData} /> */}
                <TimelineVertical data={TimelineData}/>
            </ProfileWrapper>
        </ProfileContainer>
        </>
    )
}

export default ProfileSection;
