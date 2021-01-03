import styled from 'styled-components';

export const ProfileContainer = styled.div`
    background: #faebd7;
    height: 100vh;
    width: 100vw;
`;


export const ProfileWrapper = styled.div`
    z-index: 1;
    height: 100%;
    width: 100%;
    padding: 5% 5%;
    justify-content: center;
`;

export const Layer1 = styled.div`
    height: 20%;
    width: 100%;
`;

export const SectionHeader = styled.h1`
    font-size: 5em; // TODO this is overshooting the div size so you might want to add a restrictive layer
    height: 100px;
    text-align: center;
`;

export const Layer2 = styled.div`
    /* height: 100%;
    width: 100%; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
`;


export const ImageCol = styled.div`
    height: 700px;
    width: 300px;
    margin-bottom: 15px;
    padding: 20 15px;
    align-items: center;
    flex-grow: 1;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    /* width: 50%;
    margin: 0 0 10px 0;
    padding-right: 0; */
    position: relative;
    top: 20%;
    left: 10%;
    max-width: 80%;
    object-fit: fill;
    object-position: center;
`;

export const FactsCol = styled.div`
    height: 700px;
    width: 300px;
    flex-grow: 1;
`;

export const FactsWrapper = styled.div`
    top: 20%;
    position: relative;
`;

export const FactsHeader = styled.h2`
    font-size: 2em;
    position: relative;
    text-align: center;
`;

export const FactsList = styled.ul`

`;

export const AboutMeCol = styled.div`
    flex-grow: 3;
    height: 700px;
    width: 300px;
`;

export const AboutMeWrapper = styled.div`
    position: relative;
    top: 20%;
`;

export const AboutMeHeader = styled.h2`
    font-size: 2em;
`;


export const AboutMePara = styled.div`

`;