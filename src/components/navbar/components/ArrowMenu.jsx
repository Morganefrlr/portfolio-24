import styled from "styled-components";
import { BiSolidRightArrow } from "react-icons/bi";

const ArrowMenu = ({menuSelected}) => {
    return (
        <ArrowMenuStyled className={menuSelected}>
            <BiSolidRightArrow/>
        </ArrowMenuStyled>
    );
};

const ArrowMenuStyled = styled.div`
        color: #B60000;
        position: absolute;
        transition: all 300ms ease;
        left: -3px;
        &.home{
            top: 7%;
        }
        &.service{
            top: 27%;
        }
        &.expericence{
            top: 47%;
        }
        &.portfolio{
            top: 67%;
        }
        &.contact{
            top: 87%;
        }
    
`
export default ArrowMenu;