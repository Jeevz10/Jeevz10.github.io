import React from 'react';
import { SkillsetSection,
    SkillsetHeader,
    SkillsetContent, 
    LeftCol,
    RightCol }
    from './SkillsetsElements';
import { SkillBars } from 'react-skills';

const Skillsets = ({ data }) => {
    return (
        <SkillsetSection>
            <SkillsetHeader> 
                Skillsets
            </SkillsetHeader>

            <SkillsetContent>
                <LeftCol>
                    <SkillBars skills={data} />
                </LeftCol>
                <RightCol>
                </RightCol>
            </SkillsetContent>
            
        </SkillsetSection>
    )
}

export default Skillsets;
