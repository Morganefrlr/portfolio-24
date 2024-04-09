import { FaUser, FaDownload } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { MdPushPin, MdWork } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import styled from "styled-components";
import { useContext, useState } from "react";
import AdminContext from "../../context/AdminContext";



const Navbar = () => {
    const{menuSelected, setMenuSelected} = useContext(AdminContext)
    const navbarPoint = [
        {
            label: "home",
            icon: <FaUser/>
        },
        {
            label: "service",
            icon: <FaToggleOff/>
        },
        {
            label: "expericence",
            icon: <MdWork/>
        },
        {
            label: "portfolio",
            icon: < MdPushPin/>
        },
        {
            label: "contact",
            icon: <FaDownload/>
        },
    ]

    
    return (
        <NavbarStyled>
            <div className="container">
                <div className={`arrow ${menuSelected}`}>
                    <BiSolidRightArrow className="icon"/>
                </div>
                <div className="box">
                    {navbarPoint.map(item =>
                        <div key={item.label} className={menuSelected === item.label ? 'button active' : 'button'} onClick={() => setMenuSelected(item.label)}>
                            {item.icon}
                        </div>
                    )}
                </div>
                </div>
        </NavbarStyled>
    );
};

const NavbarStyled = styled.div`
    flex: 0.5;


    .container{

        display: flex;
        height: fit-content;
        margin: 10vh auto;
        gap: 5px;
        position: relative;
       
    }

    .arrow{
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
    }

    .box{
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: fit-content;
        gap: 5px;
        margin-left: 25px;
       
    }
    .button{
        width: 50px;
        height: 50px;
        background: #191919;
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

    .active{
        background: linear-gradient(to right, #ce412e, #B60000);
        color: #191919;
        font-size: 14px;

    }
`

export default Navbar;