import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {
    TimelineSection
} from './TimelineVerticalElements';
import { HiBriefcase } from 'react-icons/hi';

const TimelineVertical = ({ timelineData }) => {
    return (
        <TimelineSection>
            <VerticalTimeline
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<HiBriefcase />}>

            </VerticalTimeline>
        </TimelineSection>
    )
}

export default TimelineVertical
