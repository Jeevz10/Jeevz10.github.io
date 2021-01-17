import React from 'react';
import { SkillsetSection,
    SkillsetHeader,
    SkillsetContent, 
    LeftCol,
    RightCol }
    from './SkillsetsElements';
import { SkillBars, SkillBar } from 'react-skills';

const Skillsets = ({ LeftData, RightData }) => {
    return (
        <SkillsetSection>
            <SkillsetHeader> 
                Skillsets
            </SkillsetHeader>

            <SkillsetContent>
                <LeftCol>
                    <SkillBars skills={LeftData} flat={true} />
                </LeftCol>
                <RightCol>
                <SkillBars skills={RightData} flat={true} />
                </RightCol>
            </SkillsetContent>
            
        </SkillsetSection>
    )
}

export default Skillsets;
