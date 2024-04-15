import styled from "styled-components";
import { useContext } from "react";
import AdminContext from "../../context/AdminContext";
import { getContentMiddleCard, navbarMenuConfig } from "../../helper/navbarConfig";

const MiddleCard = () => {
  const { menuSelected } = useContext(AdminContext)
  const contentMiddleCard = getContentMiddleCard(menuSelected, navbarMenuConfig);
  return <MiddleCardStyled>{contentMiddleCard.Content}</MiddleCardStyled>;
};

const MiddleCardStyled = styled.div`
  width: 65vw;
  height: fit-content;
  border-radius: 30px;
  background: #2a2a29;
  box-shadow: 15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60);
  display: flex;
`;
export default MiddleCard;
