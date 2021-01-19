import styled from 'styled-components';

export const PicsAndFactsLayer = styled.div`
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