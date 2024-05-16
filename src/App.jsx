import styled from "styled-components";
import LeftCard from "./components/leftCard/LeftCard";
import Navbar from "./components/navbar/Navbar";
import AdminContext from "./context/AdminContext";
import {  useState } from "react";
import MiddleCard from "./components/middleCard/MiddleCard";


function App() {
  const [menuSelected, setMenuSelected] = useState('home')
  const [projectSelected, setProjectSelected] = useState('none')
  const [isProjectOpen, setIsProjectOpen] = useState(false)



  const providerValue = {
    menuSelected,
    setMenuSelected,
    projectSelected,
    setProjectSelected,
    isProjectOpen,
    setIsProjectOpen,

  }


  return <MainPageStyled>
            <AdminContext.Provider value={providerValue}>
              <LeftCard />
              <MiddleCard />

              <Navbar />
            </AdminContext.Provider>
        
        </MainPageStyled>;
}

const MainPageStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background: #2a2a29;
  color: aliceblue;
  padding: 5rem 3rem;

  @media (max-width: 1024px){
    padding: 5rem 2rem;
  }
`;

export default App;
