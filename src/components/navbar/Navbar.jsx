import { FaUser, FaDownload } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { MdPushPin, MdWork } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";




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
        <div>
            {navbarPoint.map(item =>
                <div key={item.label} className="button">
                    {item.icon}
                </div>
            )}
        </div>
    );
};

export default Navbar;