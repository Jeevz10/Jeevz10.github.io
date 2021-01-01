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
    FactsList,
    AboutMeCol
} from './ProfileElements';

import image from '../../images/jeevan_philly.jpg';

const ProfileSection = ({img, alt}) => {
    return (
        <>
        <ProfileContainer>
            <ProfileWrapper>
                <Layer1>
                    <SectionHeader>
                        Profile
                    </SectionHeader>
                </Layer1>
                <Layer2>
                    <ImageCol>
                        <ImgWrap>
                            <Img src={image}  />
                        </ImgWrap>
                    </ImageCol>
                    <FactsCol>
                        <FactsList>

                        </FactsList>
                    </FactsCol>
                    <AboutMeCol>

                    </AboutMeCol>
                </Layer2>
                
            </ProfileWrapper>
        </ProfileContainer>

        </>
    )
}

export default ProfileSection;
