import React from 'react';
import styled from 'styled-components';

const ProjectDesc = ({desc, link}) => {
    return (
        <ProjectDescStyled>
            <p>"{desc}"</p>
            <a href={link} target="_blank" rel="noopener">Lien du projet</a> 
        </ProjectDescStyled>
    );
};

const ProjectDescStyled = styled.div`
    display: flex;
    padding: 20px;
    p{
        width: 60%;
        font-size: 16px;
        line-height: 1.75;
        font-weight: 300;
    }

    a{
        display: flex;
        color: #212120;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        align-self: center;
        margin: 0 auto;
        width: 25%;
        height: 50px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        gap: 10px;
        font-weight: 500;
        font-size: 15px;
        background: linear-gradient(to right, #ce412e, #B60000);
        &:hover{
            background: #fff;
        }
        &:active{
            background: linear-gradient(to right, #ce412e, #B60000);
        }
        }
`

export default ProjectDesc;