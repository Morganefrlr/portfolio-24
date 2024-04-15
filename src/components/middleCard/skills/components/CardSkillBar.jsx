import styled from 'styled-components';

const CardSkillBar = ({color, number}) => {
    return (
        <CardSkillBarStyled >
            <div className="progressBar" style={{background : `${color}` , width : `${number}%`}}>
                <p>{number}%</p>
            </div>
        </CardSkillBarStyled>
    );
};

const CardSkillBarStyled = styled.div`
    width: 80%;
    height: 25px;
    display: flex;
    border-radius: 50px;
    margin-bottom: 20px;
    background-color: #323231ce;
    .progressBar{
        border-radius: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10px;
    }

`
export default CardSkillBar;