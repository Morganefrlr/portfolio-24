
import styled from "styled-components";
import BoxInfos from "./components/BoxInfos";
import BoxLanguages from "./components/BoxLanguages";
import BoxSocial from "./components/BoxSocial";
import ButtonCv from "./components/ButtonCv";



const LeftCard = () => {

  return (
    <LeftCardStyled>
      <img src="/portrait.jpg" alt="" />
      <BoxInfos />
      <BoxLanguages />
      <BoxSocial />
      <ButtonCv />
    </LeftCardStyled>
  );
};

const LeftCardStyled = styled.div`
  flex: 1.5;
  background-color: aqua;

  img {
    display: none;
  }

`;
export default LeftCard;
