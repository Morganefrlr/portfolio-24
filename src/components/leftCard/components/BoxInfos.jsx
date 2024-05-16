import styled from "styled-components";
import { infos } from "../../../helper/leftCardConfig";


const BoxInfos = () => {
    return (
        <BoxInfosStyled >
        {infos.map((item) => (
          <div key={item.label} className="infos">
            <div className="infos_point"/>
            <div className="infos_details">
              <p>{item.label}</p>
              <p>{item.info}</p></div>
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
    &_details{
      display: flex;
      flex-direction: column;

      p:nth-child(odd){
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700;
        background: linear-gradient(to right, #ce412e, #B60000);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p:nth-child(even){
        font-size: 12px;
      }
    }
    
  }

`

export default BoxInfos;