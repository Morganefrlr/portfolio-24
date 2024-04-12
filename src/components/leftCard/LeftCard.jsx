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
      <hr />
      <BoxLanguages />
      <BoxSocial />
      <ButtonCv />
    </LeftCardStyled>
  );
};

const LeftCardStyled = styled.div`
    flex: 1.5;
    height: fit-content;
    border-radius: 30px;
    background:  #2a2a29;
    box-shadow: 15px 15px 30px rgb(25, 25, 25),
                -15px -15px 30px rgb(60, 60, 60);
                margin-right: 1rem;
  img {
    width: 100%;
    height: 300px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    object-fit: cover;
  }
  hr{
    width: 70%;
    border: 0.3px solid  #323231ce;
    margin: 20px auto;
  }
`;
export default LeftCard;
