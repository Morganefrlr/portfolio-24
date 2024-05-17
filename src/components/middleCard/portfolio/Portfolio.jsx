import styled from 'styled-components';
import { useContext } from 'react';
import AdminContext from '../../../context/AdminContext';
import { getContentMiddleCardPortfolio, portfolioContentConfig } from './components/portfolioConfig';
import { middleCardAnimation } from '../../../theme/animation';


const Portfolio = () => {
    
    const{ projectSelected, setProjectSelected, isProjectOpen, setIsProjectOpen} = useContext(AdminContext)


    const handleClick = async (label) => {
        await setProjectSelected(label)
        setIsProjectOpen(!isProjectOpen)
    }

    const contentMiddleCardProject = getContentMiddleCardPortfolio(isProjectOpen, portfolioContentConfig(handleClick, projectSelected))

    return (
        <PortfolioStyled>
            <h1>Portfolio</h1>
            <hr />
            {contentMiddleCardProject.Content}
        </PortfolioStyled>
    );
};

const PortfolioStyled = styled.div `
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
`
export default Portfolio;