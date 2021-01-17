import React from 'react';
import {
    ProfileContainer,
    ProfileWrapper,
    SectionHeader,
} from './ProfileElements';
import PicsAndFacts from './PicsAndFacts/PicsAndFacts';
import { TimelineData } from '../../data/ProfileSection/TimelineData';
import Timeline from './TimelineSection/index';
import AboutMe from './AboutMe/AboutMe';
import Skillsets from './SkillsetsSections/Skillsets';
import { SkillsetData } from '../../data/ProfileSection/SkillsetData';

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
                <Skillsets data={SkillsetData} />
                {/* <TimelineChrono data={TimelineData} /> */}
                <Timeline data={TimelineData}/>
            </ProfileWrapper>
        </ProfileContainer>
        </>
    )
}

export default ProfileSection;
