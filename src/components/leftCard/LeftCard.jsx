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
    border-radius: 30px;
    background: #212121;
    box-shadow: 15px 15px 30px rgb(25, 25, 25),
                -15px -15px 30px rgb(60, 60, 60);
  img {
    width: 100%;
    height: 30%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    object-fit: cover;
  }
`;
export default LeftCard;
