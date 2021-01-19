import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    background: #b3b3b3;
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    &:hover {
        transform: translateY(-2px);
    }
`;