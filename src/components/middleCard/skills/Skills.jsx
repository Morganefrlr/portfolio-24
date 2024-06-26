import styled from "styled-components";
import { skillsArray } from "../../../helper/middleCardConfig";
import CardSkill from "./components/CardSkill"
import { middleCardAnimation } from "../../../theme/animation";

const Skills = () => {

    return (
        <SkillsStyled>
            <h1>Compétences</h1>
            <hr />
            {skillsArray.map((item, index) => 
                <div className="skillsContainerGrid" key={index}>
                    {item.map(skill =>
                        <CardSkill  
                            key={skill.label} 
                            label={skill.label}
                            color={skill.couleur}
                            icon={skill.icon} 
                            number={skill.number}/>
                    )}
                </div>
            )}
        </SkillsStyled>
    );
};

const SkillsStyled = styled.div`
    width: 100%;
    padding: 30px;
    max-height: 85vh;
    overflow-y: scroll;
    animation: ${middleCardAnimation} 1s ease-in-out;
    &::-webkit-scrollbar{
        display: none;
    }
    h1{
        font-size: 40px;
    }
    hr{
        width: 80%;
        margin: 20px auto;
        border: 0.3px solid  #323231ce;
    }

    .skillsContainerGrid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 70px;
        margin-top: 100px;

    }

    @media (max-width: 1024px){
        .skillsContainerGrid{
            grid-template-columns: repeat(2, 1fr);
        }
    }


    @media (max-width: 640px){
        .skillsContainerGrid{
            display: flex;
            flex-direction: column;
        }
    }

`

export default Skills;