import React from 'react';
import TimelineVertical  from '../TimelineSection/TimelineVertical/TimelineVertical';
import { TimelineDiv, TimelineHeader, TimelinePara } from './TimelineSectionElements';

const Timeline = ({ data }) => {
    return (
        <TimelineDiv>
            <TimelineHeader>
                Snapshot
            </TimelineHeader>
            <TimelinePara>
                Here's a snapshot of the past 5 years! Dive right in to find out more!
            </TimelinePara>
            <TimelineVertical data={data} />
        </TimelineDiv>
    )
}

export default Timeline;
