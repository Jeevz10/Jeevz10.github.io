import styled from 'styled-components';

export const ProfileContainer = styled.div`
    background: #FFFFFF;
    height: 100%;
    width: 100%;
`;


export const ProfileWrapper = styled.div`
    z-index: 1;
    height: 100%;
    width: 100%;
    padding-top: 4rem;
    padding-bottom: 9rem;
    padding-left: 6rem;
    padding-right: 6rem;
    justify-content: center;
`;

export const SectionHeader = styled.h1`
    font-size: 3rem; /* ODO this is overshooting the div size so you might want to add a restrictive layer */
    height: 100px;
    text-align: center;
`;

export const PicAndFactsLayer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
`;

export const ImgCol = styled.div`
    position: relative;
    /* left: 10%; */
    object-fit: cover;
    height: 300px;
    width: 300px;
    text-align: center;
`;

export const Img = styled.img`
    position: relative;
    width: 200px;
`;

export const FactsCol = styled.div`
    height: 300px;
    max-width: 400px;
    flex-grow: 1;
`;

export const FactsWrapper = styled.div`
    top: 10%;
    position: relative;
`;

export const FactsHeader = styled.h2`
    font-size: 2em;
    position: relative;
    text-align: center;
`;

export const FactsUlList = styled.ul`
    list-style-type: none;
`;

// https://stackoverflow.com/questions/19254411/how-do-i-set-vertical-space-between-list-items/19254441#:~:text=Add%20a%20margin%20to%20your,text%20within%20the%20li%20tags.
export const FactsList = styled.li`
    margin-top: 20px; 
`;

export const AboutMeLayer = styled.div`
    margin: auto;
    height: 300px;
    width: 600px;
`;
export const AboutMeCol = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
`;

export const AboutMeHeader = styled.h2`
    font-size: 2rem;
`;


export const AboutMePara = styled.p`
    margin-top: 20px;
`;

export const TimelineLayer = styled.div`
    height: 700px;
    width: 600px;
    margin: auto;
    text-align: center;
`;

export const TimelineHeader = styled.h2`
    font-size: 2rem;
`;

export const TimelinePara = styled.p`
    margin-top: 20px;
`

export const Timeline = styled.div`
    height: 100%;
    width: 100%;
`;