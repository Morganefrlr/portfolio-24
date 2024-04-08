import styled from "styled-components";
import { social } from "./leftCardConfig";

const BoxSocial = () => {
  return (
    <BoxSocialStyled>
      {social.map((item) => (
        <a
          key={item.label}
          className={item.label}
          href={item.link}
          target="_blank"
          rel="noopener"
        >
          {item.icon}
        </a>
      ))}
    </BoxSocialStyled>
  );
};

const BoxSocialStyled = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-top: 30px;
  justify-content: center;
  gap: 5px;
  a {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-decoration: none;
  }
  .git {
    background: #000;
  }
  .whats {
    background: #25d366;
  }
  .link {
    background: #0e76a8;
  }
  .mail {
    background: #ffffff;
    color: #212121;
  }
`;

export default BoxSocial;
