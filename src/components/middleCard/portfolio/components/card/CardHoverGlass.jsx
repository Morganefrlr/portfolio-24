import { FaMagnifyingGlass } from "react-icons/fa6";
import styled from 'styled-components';

const CardHoverGlass = ({handleClick, label}) => {
    
    return (
        <CardHoverGlassStyled>
            <FaMagnifyingGlass onClick={() =>handleClick(label)}/>
        </CardHoverGlassStyled>
    );
};

const CardHoverGlassStyled = styled.div`
    position: absolute;
    top:20px;
    right: 20px;
    width: 50px;
    height: 50px;
    color: #212120;
    background: linear-gradient(to right, #ce412e, #B60000);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
    transition: all 300ms ease;
    &:hover{
        background: #fff;
    }
    &:active{
        background: linear-gradient(to right, #ce412e, #B60000);
    }
`

export default CardHoverGlass;