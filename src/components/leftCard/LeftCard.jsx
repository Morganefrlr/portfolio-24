import React from 'react';
import styled from 'styled-components';

const LeftCard = () => {
    return (
        <LeftCardStyled>
            je suis la left card
        </LeftCardStyled>
    );
};

const LeftCardStyled = styled.div`
flex: 1.5;
    background-color: aqua;
`
export default LeftCard;