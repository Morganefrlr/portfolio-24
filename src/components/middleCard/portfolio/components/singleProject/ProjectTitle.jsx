import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

const ProjectTitle = ({handleClick, project, label}) => {
    return (
        <ProjectTitleStyled>
            <div className="projectTitleIcon">
                <FaArrowLeft onClick={() => handleClick(project)}/>
            </div>
            <h2>{label}</h2>
        </ProjectTitleStyled>
    );
};

const ProjectTitleStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    h2{
        font-size: 30px;
        text-transform: capitalize;
        font-weight: 500;
    }
    .projectTitleIcon{
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 30px;
        color: #212120;
        background: linear-gradient(to right, #ce412e, #B60000);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        transition: all 300ms ease;
        &:hover{
            background: #fff;
        }
        &:active{
            background: linear-gradient(to right, #ce412e, #B60000);
        }
      

    }
`
export default ProjectTitle;