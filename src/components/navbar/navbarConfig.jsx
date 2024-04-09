import { FaUser, FaDownload } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { MdPushPin, MdWork } from "react-icons/md";


export const navbarMenuConfig = [
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