import styled from "styled-components";
import LeftCard from "./components/leftCard/LeftCard";
import Navbar from "./components/navbar/Navbar";
import AdminContext from "./context/AdminContext";
import { useState } from "react";
import About from "./components/middleCard/about/About";


function App() {
  const [menuSelected, setMenuSelected] = useState('home')

  const providerValue = {
    menuSelected,
    setMenuSelected
  }


  return <MainPageStyled>
            <AdminContext.Provider value={providerValue}>
              <LeftCard />
              <About />

              <Navbar />
            </AdminContext.Provider>
        
        </MainPageStyled>;
}

const MainPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #2a2a29;
  color: aliceblue;
  padding: 5rem;
  





`;

export default App;
