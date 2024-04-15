import React from 'react';
import styled from 'styled-components';

const CardSkill = ({label, color, icon, number}) => {
    return (
        <CardSkillStyled>
                <div className="boxImage">
                    <img src={icon} alt="" style={{background : `${color}`}}/>
                </div>
                <div className="testBoxTexte">
                    <p className="titre">{label}</p>
                    <div className="barreFond">
                        <div className="barreCouleur" style={{background : `${color}` , width : `${number}%`}}>
                        <p className="chiffre">{number}%</p>
                        </div>
                    </div>
                </div>
        </CardSkillStyled>
    );
};

const CardSkillStyled = styled.div`
width: 200px;
    height: 120px;
    background-color: #212120;
    position: relative;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column-reverse;
    .boxImage{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        background: red;
        border-radius: 50px;
        position: absolute;
        bottom: 75px;
        left: 50px;
        overflow: hidden;
        border: 5px solid #2a2a29;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }


    .testBoxTexte{
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        .titre{
            font-weight: 600;
            font-size: 18px;
        }

        .barreFond{
            width: 80%;
            height: 25px;
            display: flex;
            border-radius: 50px;
            margin-bottom: 20px;
            background-color: #323231ce;
            .barreCouleur{
                border-radius: 50px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding-right: 10px;
            }

        }
    }
`

export default CardSkill;