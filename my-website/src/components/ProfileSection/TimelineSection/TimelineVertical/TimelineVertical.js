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

const TimelineVertical = ({ data }) => {

    return (
        <TimelineSection>
            <VerticalTimeline className='vertical-time' >
                <VerticalTimelineElement 
                contentStyle={{ background: '#336600', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #336600' }}
                date="Mar 2015 - Mar 2017"
                dateClassName='date'
                iconStyle={{ background: '#336600', color: '#fff' }}
                icon={<GiPistolGun />}
                >
                    <h3> {data.army.title}</h3>
                    <h4>  {data.army.subTitle} </h4>
                    <p>  {data.army.content}</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                contentStyle={{ background: '#003399', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #003399' }}
                date="Aug 2017 - Present"
                dateClassName='date'
                iconStyle={{ background: '#003399', color: '#fff' }}
                icon={<BsBook />}>
                    <h3> {data.nus.title}</h3>
                    <h4>  {data.nus.subTitle} </h4>
                    <p>  {data.nus.content}</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                contentStyle={{ background: '#660000', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #660000' }}
                date="2011 - Present"
                dateClassName='date'
                iconStyle={{ background: '#660000', color: '#fff' }}
                icon={<HiBriefcase />}>
                    <h3> {data.alloy.title}</h3>
                    <h4>  {data.alloy.subTitle} </h4>
                    <p>  {data.alloy.content}</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                contentStyle={{ background: '#ac7339', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #ac7339' }}
                date="May 2021"
                dateClassName='date'
                iconStyle={{ background: '#ac7339', color: '#fff' }}
                icon={<HiBriefcase />}>
                    <h3> {data.next.title}</h3>
                    <h4>  {data.next.subTitle} </h4>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </TimelineSection>
    )
}

export default TimelineVertical
