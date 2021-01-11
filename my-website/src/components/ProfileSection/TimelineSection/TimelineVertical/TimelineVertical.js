import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {
    TimelineSection
} from './TimelineVerticalElements';
import 'react-vertical-timeline-component/style.min.css';
import { HiBriefcase } from 'react-icons/hi';
import { GiPistolGun } from 'react-icons/gi';
import { BsBook } from 'react-icons/bs';

const TimelineVertical = ({ timelineData }) => {
    return (
        <TimelineSection>
            <VerticalTimeline>
                <VerticalTimelineElement 
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<GiPistolGun />}>
                    <h3> hamnam </h3>
                    <p> something something </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<BsBook />}>
                    <h3> hamnam </h3>
                    <p> something something </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<HiBriefcase />}>
                    <h3> hamnam </h3>
                    <p> something something </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </TimelineSection>
    )
}

export default TimelineVertical
