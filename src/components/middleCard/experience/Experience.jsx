import styled from "styled-components";
import { experienceConfig, formationConfig } from "../../../helper/middleCardConfig";
import SingleExpeComponent from "./components/SingleExpeComponent";
import SingleFormationComponent from "./components/SingleFormationComponent";


const Experience = () => {
    return (
        <ExperienceStyled>

                <h1>Formations</h1>
                <hr />

                <div className="containerFormation">
                    {formationConfig.map(item =>
                        <SingleFormationComponent
                            key={item.label}
                            label={item.label}
                            year={item.year}
                            details={item.details}
                            />
                    )}
                </div>
            <hr />

            
            <h1>Expériences</h1>
                <hr />

                <div className="containerExperience">
                    {experienceConfig.map(item =>
                        <SingleExpeComponent key={item.label} index={item.index} year={item.year} label={item.label} details={item.details}/>
                    )}
                </div>

        </ExperienceStyled>
    );
};

const ExperienceStyled = styled.div`
    width: 100%;
    padding: 30px;
    max-height: 85vh;
    overflow-y: scroll;
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

    .containerFormation{
        width: 80%;
        margin: 0 30px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

    }
`

export default Experience;