import styled from "styled-components";
import { useContext } from "react";
import AdminContext from "../../context/AdminContext";
import {navbarMenuConfig }from "../navbar/navbarConfig"

const MiddleCard = () => {
    const {menuSelected} = useContext(AdminContext)
    const getContentMiddleCard = (menuSelected, navbarMenuConfig) => {
        return navbarMenuConfig.find((item) => item.label === menuSelected)
    }

    const displayContent = getContentMiddleCard(menuSelected, navbarMenuConfig)
    return (
        <MiddleCardStyled>
            {displayContent.Content}
        </MiddleCardStyled>
    );
};

const MiddleCardStyled = styled.div`
    width: 65vw;
    border-radius: 30px;
    background:  #2a2a29;
    box-shadow: 15px 15px 30px rgb(25, 25, 25),
                -15px -15px 30px rgb(60, 60, 60);
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default MiddleCard;