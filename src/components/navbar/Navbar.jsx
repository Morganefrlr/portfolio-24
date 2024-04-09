import { FaUser, FaDownload } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { MdPushPin, MdWork } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import styled from "styled-components";
import { useState } from "react";



const Navbar = () => {
    const [selected, setSelected] = useState('Home')
    const navbarPoint = [
        {
            label: "Home",
            icon: <FaUser/>
        },
        {
            label: "Service",
            icon: <FaToggleOff/>
        },
        {
            label: "Expericence",
            icon: <MdWork/>
        },
        {
            label: "Portfolio",
            icon: < MdPushPin/>
        },
        {
            label: "Contact",
            icon: <FaDownload/>
        },
    ]

    console.log(selected)
    return (
        <NavbarStyled>
            <div className="container">
                <div className={`arrow ${selected}`}>
                    <BiSolidRightArrow className="icon"/>
                </div>
                <div className="box">
                    {navbarPoint.map(item =>
                        <div key={item.label} className={selected === item.label ? 'button active' : 'button'} onClick={() => setSelected(item.label)}>
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
        &.Home{
            top: 7%;
        }
        &.Service{
            top: 27%;
        }
        &.Expericence{
            top: 47%;
        }
        &.Portfolio{
            top: 67%;
        }
        &.Contact{
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