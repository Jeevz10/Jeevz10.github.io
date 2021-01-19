import React from 'react';
import { SkillsetSection,
    SkillsetHeader,
    SkillsetContent, 
    LeftCol,
    Programming,
    WebDev,
    RightCol,
    Cloud,
    BigData,
    MachineLearning }
    from './SkillsetsElements';
import { SkillBars, SkillBar } from 'react-skills';

// https://developer.aliyun.com/mirror/npm/package/react-skills

const Skillsets = ({ ProgrammingData, WebDevData, CloudData, BigDataData, MachineLearningData }) => {
    return (
        <SkillsetSection>
            <SkillsetHeader> 
                Skillsets
            </SkillsetHeader>

            <SkillsetContent>

                <LeftCol>
                    <Programming> Programming </Programming>
                    <SkillBars skills={ProgrammingData} flat={true} />

                    <WebDev> Web Deb </WebDev>
                    <SkillBars skills={WebDevData} flat={true} />

                </LeftCol>
                <RightCol>
                    <MachineLearning> Machine Learning </MachineLearning>
                    <SkillBars skills={MachineLearningData} flat={true} />

                    <BigData> Big Data </BigData>
                    <SkillBars skills={BigDataData} flat={true} />

                    <Cloud> Cloud Services </Cloud>
                    <SkillBars skills={CloudData} labelsWidth={110} flat={true} />
    
                </RightCol>
            </SkillsetContent>
            
        </SkillsetSection>
    )
}
// TODO i could alternatively map through the objects of objects 
export default Skillsets;
