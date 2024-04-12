import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";

const AboutButton = ({handleClick}) => {
    return (
        <AboutButtonStyled onClick={handleClick}>
            Portfolio
            <IoIosArrowRoundForward className="icon"/>
        </AboutButtonStyled>
    );
};

const AboutButtonStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 50px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    gap: 10px;
    font-weight: 500;
    font-size: 15px;
    background: linear-gradient(to right, #ce412e, #B60000);
    .icon{
        font-size: 20px;
    }

    &:active{
        background: linear-gradient(to left, #ce412e, #B60000);
    }
`
export default AboutButton;