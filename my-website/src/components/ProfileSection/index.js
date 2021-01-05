import React from 'react';
import {
    ProfileContainer,
    ProfileWrapper,
    PicAndFactsLayer,
    SectionHeader,
    AboutMeLayer,
    ImgCol,
    Img,
    FactsCol,
    FactsWrapper,
    FactsUlList,
    FactsList,
    AboutMeCol,
    AboutMeHeader,
    AboutMePara,
    TimelineLayer,
    TimelineHeader,
    Timeline,
    TimelinePara
} from './ProfileElements';

import image from '../../images/jeevan_passport.jpg';

const ProfileSection = ({factsData}) => {
    return (

        <>
        <ProfileContainer>
            <ProfileWrapper>
                <SectionHeader>
                    Profile
                </SectionHeader>
                <PicAndFactsLayer>
                    
                    <ImgCol>
                        <Img src={image} />
                    </ImgCol>

                    <FactsCol>
                        <FactsWrapper>
                            {/* TODO Bold the keys */}
                            <FactsUlList>
                                {factsData.map((facts, index) => {
                                    return (
                                        <FactsList key={index}>
                                            {facts.key} - {facts.value}
                                        </FactsList>
                                    )
                                })}
                            </FactsUlList>
                        </FactsWrapper>
                    </FactsCol>
                </PicAndFactsLayer>
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

                    <Timeline>

                    </Timeline>
                </TimelineLayer>
            </ProfileWrapper>
        </ProfileContainer>
        </>
    )
}

export default ProfileSection;
