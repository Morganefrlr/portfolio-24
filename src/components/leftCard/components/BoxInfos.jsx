import styled from "styled-components";
import { infos } from "./leftCardConfig";


const BoxInfos = () => {
    return (
        <BoxInfosStyled >
        {infos.map((item) => (
          <div key={item.label} className="infos">
            <div className="infos_point"/>
            <p>{item.label}</p>
            <p>{item.info}</p>
          </div>
        ))}
      </BoxInfosStyled>
    );
};

const BoxInfosStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 30px 0;
  .infos{
    display: flex;
    align-items: center;

    &_point{
      width: 18px;
      height: 8px;
      background: linear-gradient(to right, #ce412e, #B60000);
      margin-right: 10px;
    }
    p:nth-child(even){
      width: 30%;
      text-transform: uppercase;
      font-size: 0.8vw;
      font-weight: 700;
      background: linear-gradient(to right, #ce412e, #B60000);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p:nth-child(odd){
      width: 50%;
      font-size: 1vw;
    }
  }
`

export default BoxInfos;