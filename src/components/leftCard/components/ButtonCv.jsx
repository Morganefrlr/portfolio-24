import { FaDownload } from "react-icons/fa";
import styled from "styled-components";

const ButtonCv = () => {
  return (
    
      <ButtonCvStyled href="/cv.pdf" download="MoganeAncelinCv">
        Télécharger CV
        <FaDownload />
      </ButtonCvStyled> 
    
  );
};

const ButtonCvStyled = styled.a`
  display: flex;
  width: 100%;
  height: 50px;
  margin: 20px auto 0 auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color:  #212120;
  text-decoration: none;
  font-weight: 500;
  background: linear-gradient(to right, #ce412e, #b60000);
  cursor: pointer;
  transition: all 500ms ease;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  align-self: flex-end;
  &:hover {
    color: #fff;
  }

  &:active {
    background: transparent;
    border: 3px solid #b60000;
  }

  @media (max-width: 768px){
    border-bottom-left-radius: 0px;
    border-top-right-radius: 30px;
    flex-direction: column;
    text-align: center;
    height: 300px;
    margin: 0;
    width: 15%;
    font-size: 80%;
  }
`;
export default ButtonCv;
