import { createContext } from "react";

export default createContext({
    menuSelected:'home',
    setMenuSelected: () => {},
    
    isProjectOpen: false,
    setIsProjectOpen: () => {},

    projectSelected:'none',
    setProjectSelected: () => {}
})