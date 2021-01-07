import React from 'react';
import {
    PicsAndFactsLayer,
    ImgCol,
    Img,
    FactsCol,
    FactsWrapper,
    FactsUlList,
    FactsList
} from './PicsAndFactsElements';

const PicsAndFacts = ({ data, img }) => {
    return (
        <PicsAndFactsLayer>
            <ImgCol>
                <Img src={img} />
            </ImgCol>
            <FactsCol>
                <FactsWrapper>
                    {/* TODO Bold the keys */}
                    <FactsUlList>
                        {data.map((facts, index) => {
                            return (
                                <FactsList key={index}>
                                    {facts.key} - {facts.value}
                                </FactsList>
                            )
                        })}
                    </FactsUlList>
                </FactsWrapper>
            </FactsCol>    
        </PicsAndFactsLayer>
    )
}

export default PicsAndFacts;
