import {keyframes } from "styled-components";


export const leftCardAnimation = keyframes`
    0%{
        transform: translateX(-100px);
        opacity: 0;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`

export const middleCardAnimation = keyframes`
    0%{
        transform: translateY(180px);
        opacity: 0;
    }
    100%{
        transform: translateY(0px);
        opacity: 1;
    }
`

