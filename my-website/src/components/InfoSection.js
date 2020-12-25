import React from 'react';
import styled from 'styled-components';

const Section = styled.section`

`;

const Container = styled.div`

`;

const ColumnLeft = styled.div`

`;

const ColumnRight = styled.div`

`;
const InfoSection = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                <h1> efere </h1>
                <p> oaf </p>
                <p> ffsfs </p>
                <Button to="/home"> labels</Button>
                </ColumnLeft>
                <ColumnRight>
                <img src="" alt="home" />
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default InfoSection
