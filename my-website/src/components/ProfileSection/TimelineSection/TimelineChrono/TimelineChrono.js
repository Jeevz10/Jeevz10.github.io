import React from 'react'
import {  TimelineLayer,
    TimelineHeader,
    TimelineColumn,
    TimelineDiv,
    HeaderColumn,
    TimelinePara } from './TimelineChronoElements';
import { Chrono } from 'react-chrono';

const Timeline = ({ data }) => {
    return (
        <TimelineLayer>
            <HeaderColumn>
                <TimelineHeader>
                    Timeline
                </TimelineHeader>
                <TimelinePara>
                    I believe each has their own story to tell. Why not show you mine?
                </TimelinePara>
            </HeaderColumn>
            <TimelineColumn>
                <TimelineDiv>
                    <Chrono 
                    mode='VERTICAL_ALTERNATING' 
                    items={data} 
                    // slideShow={true} 
                    // onRestartSlideshow={true} 
                    // slideItemDuration={4500} 
                    />
                </TimelineDiv>
            </TimelineColumn>
        </TimelineLayer>
    )
}

export default Timeline;
