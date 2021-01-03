import React from 'react';
import {
    ProfileContainer,
    ProfileWrapper,
    Layer1,
    SectionHeader,
    Layer2,
    ImageCol,
    ImgWrap,
    Img,
    FactsCol,
    FactsWrapper,
    FactsHeader,
    FactsUlList,
    FactsList,
    AboutMeCol,
    AboutMeWrapper,
    AboutMeHeader,
    AboutMePara,
} from './ProfileElements';

import image from '../../images/jeevan_philly.jpg';

const ProfileSection = ({factsData}) => {
    return (
        <>
        <ProfileContainer>
            <ProfileWrapper>
                {/* <Layer1>
                    <SectionHeader>
                        Profile
                    </SectionHeader>
                </Layer1> */}
                <SectionHeader>
                    Profile
                </SectionHeader>
                <Layer2>
                    <ImageCol>
                        <ImgWrap>
                            <Img src={image}  />
                        </ImgWrap>
                    </ImageCol>
                    <FactsCol>
                        <FactsWrapper>
                            <FactsHeader>
                                Facts
                            </FactsHeader>
                            <FactsUlList>
                                {factsData.map((facts, index) => {
                                    return (
                                        <FactsList key={index}>
                                            {facts.key} - {facts.value}
                                        </FactsList>
                                        
                                    )
                                })}

                                {/* {headers.map((header, index) => {
                            return (
                                <NavItem key={index}>
                                    <NavLinks to={header.path}> {header.title} </NavLinks>
                                </NavItem>
                            )
                        })} */}
                            </FactsUlList>
                        </FactsWrapper>
                    </FactsCol>
                    <AboutMeCol>
                        <AboutMeWrapper>
                            <AboutMeHeader>
                                About Me 
                            </AboutMeHeader>
                            <AboutMePara>
                                Hey there! Welcome to my personal webpage! I created this because not only did I want to hone my HTML, CSS and React skill,
                                I wanted to create a page where anyone could get an idea of who I am by simply exploring this page! 

                             
                            </AboutMePara>
                        </AboutMeWrapper>
                        
                    </AboutMeCol>
                </Layer2>
                
            </ProfileWrapper>
        </ProfileContainer>

        </>
    )
}

export default ProfileSection;
