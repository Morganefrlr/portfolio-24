import styled from "styled-components";
import { useContext } from "react";
import AdminContext from "../../../context/AdminContext";
import AboutTextPart from "./components/AboutTextPart";
import AboutContainerImages from "./components/AboutContainerImages";
import AboutButton from "./components/AboutButton";

const About = () => {
    const{ setMenuSelected} = useContext(AdminContext)
    return (
        <AboutStyled>
            <AboutTextPart />
            <AboutContainerImages />
            <AboutButton handleClick={() => setMenuSelected('portfolio')}/>
        </AboutStyled>
    );
};


const AboutStyled = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 10% auto;
`
export default About;