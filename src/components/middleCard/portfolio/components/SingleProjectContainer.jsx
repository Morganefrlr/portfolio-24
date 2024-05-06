import styled from "styled-components";
import { projectsPortfolio } from "../../../../helper/middleCardConfig";
import ProjectTitle from "./singleProject/ProjectTitle";
import ProjectDesc from "./singleProject/ProjectDesc";

const SingleProjectContainer = ({handleClick, project}) => {

    const projectSelectedObjectArray = projectsPortfolio.filter(el => el.label === project)
    const projectSelected = projectSelectedObjectArray[0]



    return (
        <SingleProjectContainerStyled>
            <ProjectTitle handleClick={handleClick} project={project} label={projectSelected.label}/>
            <video controls>
                <source src={projectSelected.video} type="video/mp4"/>
            </video>
            <ProjectDesc desc={projectSelected.desc} link={projectSelected.link} />
        </SingleProjectContainerStyled>
    );
};

const SingleProjectContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    video{
        width: 100%;
        border-radius: 20px;
    }
`

export default SingleProjectContainer;