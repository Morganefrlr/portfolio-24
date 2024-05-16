import styled from "styled-components";
import { navbarMenuConfig } from "../../../helper/navbarConfig";
import NavbarBoutton from "./NavbarBoutton";

const NavbarMenu = ({menuSelected, handleClick}) => {
    return (
        <NavbarMenuStyled>
            {navbarMenuConfig.map(item =>
                <NavbarBoutton
                    key={item.label} 
                    className={menuSelected === item.label ? 'isActive' : ''}
                    handleClick={() => handleClick(item.label)}
                    icon={item.icon}
                />
            )}
        </NavbarMenuStyled>
    );
};

const NavbarMenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    gap: 5px;
    margin-left: 25px;

    @media (max-width: 768px){
        flex-direction:row ;
    }
    
`

export default NavbarMenu;