import { FaDownload } from "react-icons/fa";
import styled from "styled-components";

const ButtonCv = () => {
  return (
    <ButtonCvStyled>
      <FaDownload />
      <p>Télécharger CV</p>
    </ButtonCvStyled>
  );
};

const ButtonCvStyled = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #212121;
  font-weight: 500;
  background: linear-gradient(to right, #ce412e, #b60000);
  cursor: pointer;
  transition: all 500ms ease;
  &:hover {
    color: #fff;
  }

  &:active {
    background: transparent;
    border: 3px solid #b60000;
  }
`;
export default ButtonCv;
