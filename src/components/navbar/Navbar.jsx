import { FaUser, FaDownload } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { MdPushPin, MdWork } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import styled from "styled-components";



const Navbar = () => {

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
    return (
        <NavbarStyled>
            <div className="box">
                {navbarPoint.map(item =>
                    <div key={item.label} className="button">
                        {item.icon}
                    </div>
                )}
            </div>
        </NavbarStyled>
    );
};

const NavbarStyled = styled.div`
    flex: 0.5;
    background-color:green;

    .box{
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: fit-content;
        gap: 5px;
        margin: 10vh auto;
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