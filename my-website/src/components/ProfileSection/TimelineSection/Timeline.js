import React from 'react'
import {  TimelineLayer,
    TimelineHeader,
    TimelineColumn,
    TimelineDiv,
    HeaderColumn,
    TimelinePara } from '../TimelineSection/TimelineElements';
import { Chrono } from 'react-chrono';

const Timeline = ({ data }) => {
    return (
        <TimelineLayer>
            <HeaderColumn>
                <TimelineHeader>

                </TimelineHeader>
                <TimelinePara>

                </TimelinePara>
            </HeaderColumn>
            <TimelineColumn>
                <TimelineDiv>
                    <Chrono 
                    mode='VERTICAL_ALTERNATING' 
                    items={data} 
                    slideShow={true} 
                    onRestartSlideshow={true} 
                    slideItemDuration={4500} />
                </TimelineDiv>
            </TimelineColumn>
        </TimelineLayer>
    )
}

export default Timeline;
