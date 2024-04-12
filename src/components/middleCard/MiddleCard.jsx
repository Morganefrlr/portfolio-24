import styled from "styled-components";
import About from "./about/About";

const MiddleCard = () => {
    
    return (
        <MiddleCardStyled>
            <About />
        </MiddleCardStyled>
    );
};

const MiddleCardStyled = styled.div`
    flex: 3;
    border-radius: 30px;
    background:  #2a2a29;
    box-shadow: 15px 15px 30px rgb(25, 25, 25),
                -15px -15px 30px rgb(60, 60, 60);
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default MiddleCard;