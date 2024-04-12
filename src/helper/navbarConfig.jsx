import { FaUser, FaDownload } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
import { MdPushPin, MdWork } from "react-icons/md";
import About from "../components/middleCard/about/About";
import Skills from "../components/middleCard/skills/Skills";
import Experience from "../components/middleCard/experience/Experience";
import Portfolio from "../components/middleCard/portfolio/Portfolio";
import Contact from "../components/middleCard/contact/Contact";

export const navbarMenuConfig = [
  {
    label: "home",
    icon: <FaUser />,
    Content: <About />,
  },
  {
    label: "service",
    icon: <FaToggleOff />,
    Content: <Skills />,
  },
  {
    label: "expericence",
    icon: <MdWork />,
    Content: <Experience />,
  },
  {
    label: "portfolio",
    icon: <MdPushPin />,
    Content: <Portfolio />,
  },
  {
    label: "contact",
    icon: <FaDownload />,
    Content: <Contact />,
  },
];


export const getContentMiddleCard = (menuSelected, navbarMenuConfig) => {
  return navbarMenuConfig.find((item) => item.label === menuSelected);
};