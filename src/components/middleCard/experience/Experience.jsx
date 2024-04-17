import { experienceConfig, formationConfig } from "../../../helper/middleCardConfig";
import SingleExpeComponent from "./components/SingleExpeComponent";
import SingleFormationComponent from "./components/SingleFormationComponent";


const Experience = () => {
    return (
        <div>
            <div className="divFrmation">

                <h1>Formations</h1>
                <hr />

                <div>
                    {formationConfig.map(item =>
                        <SingleFormationComponent />
                    )}
                </div>

            </div>
            <hr />

            <div className="divexpe">
            <h1>Expériences</h1>
                <hr />

                <div>
                    {experienceConfig.map(item =>
                        <SingleExpeComponent />
                    )}
                </div>

            </div>
        </div>
    );
};

export default Experience;