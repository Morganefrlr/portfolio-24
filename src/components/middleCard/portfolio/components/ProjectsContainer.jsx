import styled from "styled-components";
import { projectsPortfolio } from "../../../../helper/middleCardConfig";
import CardProject from "./card/CardProject";

const ProjectsContainer = ({handleClick}) => {

    return (
        <ProjectsContainerStyled>
            {projectsPortfolio.map(item =>
                <CardProject key={item.label} project={item} handleClick={handleClick}/>
            )}
        </ProjectsContainerStyled>
    );
};
const ProjectsContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(100px, auto);
    .one {
        grid-column: 1/4;
        grid-row: 1;
    }
    .two {
        grid-column: 1/3;
        grid-row: 2 ;
    }
    .three {
        grid-column: 3;
        grid-row: 2;
    }
    .four {
        grid-column: 1;
        grid-row: 3;
    }
    .five {
        grid-column: 2/4;
        grid-row: 3;
    }
    .six {
        grid-column: 1;
        grid-row: 4;
    }
    .seven {
        grid-column: 2;
        grid-row: 4;
    }
    .eight {
        grid-column: 3;
        grid-row: 4;
    }
`

export default ProjectsContainer;