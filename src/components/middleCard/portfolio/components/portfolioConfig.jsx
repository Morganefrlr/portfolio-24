import ProjectsContainer from "./ProjectsContainer";
import SingleProjectContainer from "./SingleProjectContainer";



export const portfolioContentConfig = (handleClick, projectSelected) => [
    {
      isOpen:false,
      Content: <ProjectsContainer handleClick={handleClick}/>,
    },
    {
      isOpen:true,
      Content:<SingleProjectContainer handleClick={handleClick} project={projectSelected}/>,
    }
  ];


export const getContentMiddleCardPortfolio = (isProjectOpen, portfolioContentConfig) => {
    return portfolioContentConfig.find((item) => item.isOpen === isProjectOpen);
  };