import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {
    TimelineSection,
    ArmyElement,
} from './TimelineVerticalElements';
import 'react-vertical-timeline-component/style.min.css';
import { HiBriefcase } from 'react-icons/hi';
import { GiPistolGun } from 'react-icons/gi';
import { BsBook } from 'react-icons/bs';
import './TimelineVertical.css';

const TimelineVertical = ({ timelineData }) => {

    return (
        <TimelineSection>
            <VerticalTimeline className='vertical-time' >
                <VerticalTimelineElement 
                contentStyle={{ background: '#336600', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #336600' }}
                date="Mar 2015 - Mar 2017"
                iconStyle={{ background: '#336600', color: '#fff' }}
                icon={<GiPistolGun />}
                style={{background: 'black'}}>
                    <h3> Singapore Armed Forces </h3>
                    <h4> First Lieutanant </h4>
                    <p> something something </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                contentStyle={{ background: '#003399', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #003399' }}
                date="Aug 2017 - Present"
                iconStyle={{ background: '#003399', color: '#fff' }}
                icon={<BsBook />}>
                    <h3> National University of Singapore  </h3>
                    <h4> Bachelor of Engineering (Computer Engineering) </h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                contentStyle={{ background: '#660000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #660000' }}
                date="2011 - present"
                iconStyle={{ background: '#660000', color: '#fff' }}
                icon={<HiBriefcase />}>
                    <h3> hamnam </h3>
                    <p> something something </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                contentStyle={{ background: '#ac7339', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #ac7339' }}
                date="May 2021"
                iconStyle={{ background: '#ac7339', color: '#fff' }}
                icon={<HiBriefcase />}>
                    <h3> hamnam </h3>
                    <p> something something </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </TimelineSection>
    )
}

export default TimelineVertical
