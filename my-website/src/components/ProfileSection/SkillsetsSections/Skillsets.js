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
                    {/* <Programming> 
                        
                    </Programming>
                    <WebDev> 
                        

                    </WebDev>

                    <Database>

                    </Database> */}
                    <SkillBars skills={LeftData}  />
                </LeftCol>
                <RightCol>
                    {/* <MachineLearning>

                    </MachineLearning>

                    <BigData>

                    </BigData>

                    <CloudServices>

                    </CloudServices> */}
                <SkillBars skills={RightData}  />
                </RightCol>
            </SkillsetContent>
            
        </SkillsetSection>
    )
}

export default Skillsets;
