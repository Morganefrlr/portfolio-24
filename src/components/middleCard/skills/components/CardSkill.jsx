import styled from 'styled-components';
import CardSkillBar from './CardSkillBar';


const CardSkill = ({label, color, icon, number}) => {
    return (
        <CardSkillStyled>
                <div className="cardSkillImg">
                    <img src={icon} alt="" style={{background : `${color}`}}/>
                </div>
                <div className="cardSkillInfos">
                    <p className="cardSkillInfos_title">{label}</p>
                    <CardSkillBar color={color} number={number}/>
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
    margin: 0 auto;
    .cardSkillImg{
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


    .cardSkillInfos{
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        &_title{
            font-weight: 600;
            font-size: 18px;
        }
    }
`

export default CardSkill;