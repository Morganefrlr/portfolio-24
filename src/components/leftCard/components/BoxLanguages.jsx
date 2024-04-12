import styled from "styled-components";
import { languages }  from "../../../helper/leftCardConfig";

const BoxLanguages = () => {
  return (
    <BoxLanguagesStyled>
      {languages.map((item) => (
        <div className="boxSingle" key={item.label}>
          <div className="boxSingle_roundBack">
            <div className={`border ${item.class}`}/>
            <p>{item.number}%</p>
          </div>
          <p>{item.label}</p>
        </div>
      ))}
    </BoxLanguagesStyled>
  );
};

const BoxLanguagesStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  .boxSingle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    p{
        font-size: 14px;
      }
    &_roundBack {
      width: 60px;
      height: 60px;
      box-sizing: content-box;
      border-radius: 50%;
      border: 3px solid  #212120;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .border{
        width: 60px;
        height: 60px;
        box-sizing: content-box;
        border-radius: 50%;
        border: 3px solid #ce412e;
        position: absolute;
      }
      .noFull{
        border-top:3px solid transparent;
      }

      
    }
  }
`;
export default BoxLanguages;
