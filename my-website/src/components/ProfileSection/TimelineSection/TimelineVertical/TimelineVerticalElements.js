import styled from 'styled-components';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

export const TimelineSection = styled.div`
    height: 800px;
    width: 600px;
    margin: auto;
    background: #6b6b47;
`;

export const ArmyElement = styled(VerticalTimelineElement)`
    contentStyle{
        background: #336600;
        color: #fff;
    }
    /* iconStyle {
        background: 'rgb(33,150,243)';
        color: #fff;
    } */

`;

export const NUSElement = styled(VerticalTimelineElement)`

`;

export const AlloyElement = styled(VerticalTimelineElement)`display


`;