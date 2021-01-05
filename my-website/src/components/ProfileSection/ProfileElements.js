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
`;

export const ImgCol = styled.div`
    position: relative;
    object-fit: cover;
    height: 300px;
    width: 400px;
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
    flex-grow: 1;
    height: 100%;
    width: 100%;
    text-align: center;
`;

export const AboutMeHeader = styled.h2`
    font-size: 2rem;
    position: relative;
    text-align: center;
`;


export const AboutMePara = styled.div`
    margin-top: 20px;
`;