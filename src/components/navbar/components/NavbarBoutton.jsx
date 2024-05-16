import styled from "styled-components";

const NavbarBoutton = ({className, icon, handleClick}) => {
    return (
        <NavbarButtonStyled className={className} onClick={handleClick}>
            {icon}
        </NavbarButtonStyled>
    );
};

const NavbarButtonStyled = styled.div`
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

    &.isActive{
        background: linear-gradient(to right, #ce412e, #B60000);
        color:  #212120;
        font-size: 14px;

    }


    @media (max-width: 768px){
        width: 70px;
        height: 70px;
    }
    @media (max-width: 640px){
        width: 50px;
        height: 50px;
    }
`
export default NavbarBoutton;