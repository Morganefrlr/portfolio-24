import styled from "styled-components";
import { useContext } from "react";
import AdminContext from "../../context/AdminContext";
import ArrowMenu from "./components/ArrowMenu";
import NavbarMenu from "./components/NavbarMenu";



const Navbar = () => {
    const{menuSelected, setMenuSelected,setProjectSelected, setIsProjectOpen} = useContext(AdminContext)

    const handleMenuSelected = async (menu) =>{
        await setIsProjectOpen(false)
        await setProjectSelected('none')
        setMenuSelected(menu)
    }

    
    return (
        <NavbarStyled>
            <ArrowMenu menuSelected={menuSelected}/>
            <NavbarMenu menuSelected={menuSelected} handleClick={handleMenuSelected}/>
        </NavbarStyled>
    );
};

const NavbarStyled = styled.div`
    flex: 0.5;
    display: flex;
    height: fit-content;
    margin: 10vh auto;
    gap: 5px;
    position: relative;

    @media (max-width: 768px){
        width: 80%;
        display: flex;
        justify-content: center;
        margin: 4vh auto;
    }
    
    @media (max-width: 640px){
        
    }
`

export default Navbar;