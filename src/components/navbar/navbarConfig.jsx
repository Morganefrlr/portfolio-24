import { FaUser, FaDownload } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { MdPushPin, MdWork } from "react-icons/md";
import About from "../middleCard/about/About";
import Skills from "../middleCard/skills/Skills";
import Experience from "../middleCard/experience/Experience";
import Portfolio from "../middleCard/portfolio/Portfolio";
import Contact from "../middleCard/contact/Contact";


export const navbarMenuConfig = [
    {
        label: "home",
        icon: <FaUser/>, 
        Content: <About/> 
    },
    {
        label: "service",
        icon: <FaToggleOff/>, 
        Content: <Skills/>
    },
    {
        label: "expericence",
        icon: <MdWork/>, 
        Content: <Experience/>
    },
    {
        label: "portfolio",
        icon: < MdPushPin/>, 
        Content: <Portfolio/>
    },
    {
        label: "contact",
        icon: <FaDownload/>, 
        Content: <Contact/>
    },
]