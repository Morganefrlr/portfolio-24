import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn,FaDownload } from "react-icons/fa";



const LeftCard = () => {
  const infos = [
    {
      label: "Adresse",
      info: "La Rochelle",
    },
    {
      label: "Téléphone",
      info: "06.58.80.02.24",
    },
    {
      label: "Mail",
      info: "morganeancelin@me.com",
    },
  ];
  return (
    <LeftCardStyled>
      <img src="/portrait.jpg" alt="" />
      <div className="blocInfos">
        {infos.map((item) => (
          <div key={item.label}>
            <div />
            <p>{item.label}</p>
            <p>{item.info}</p>
          </div>
        ))}
      </div>
      <div className="blocLangues">
        <div>
          <div>
            <div />
            <p>100%</p>
          </div>
          <p>francais</p>
        </div>
        <div>
          <div>
            <div />
            <p>80%</p>
          </div>
          <p>anglais</p>
        </div>
      </div>
      <div className="blocSocial">
        <div>
            <FaGithub/>
        </div>
        <div>
            <FaLinkedinIn/>
        </div>
      </div>
      <div className="blocCV">
        <div>
            <FaDownload/>
            <p>Télécharger CV</p>
        </div>
      </div>
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
