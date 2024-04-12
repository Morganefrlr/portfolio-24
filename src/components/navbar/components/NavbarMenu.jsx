import styled from "styled-components";
import { navbarMenuConfig } from "../navbarConfig";

const NavbarMenu = ({menuSelected, handleClick}) => {
    return (
        <NavbarMenuStyled>
            {navbarMenuConfig.map(item =>
                <div key={item.label} 
                    className={menuSelected === item.label ? 'menuButton menuButtonActive' : 'menuButton'} 
                    onClick={() => handleClick(item.label)}>
                    {item.icon}
                </div>
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

    .menuButton{
        width: 50px;
        height: 50px;
        background:  #212120;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 12px;
        cursor: pointer;
        transition: all 300ms ease;

        &:hover{
            font-size: 16px;
        }

    }

    .menuButtonActive{
        background: linear-gradient(to right, #ce412e, #B60000);
        color:  #212120;
        font-size: 14px;

    }
`

export default NavbarMenu;