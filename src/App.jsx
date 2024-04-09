import styled from "styled-components";
import LeftCard from "./components/leftCard/LeftCard";
import Navbar from "./components/navbar/Navbar";
import AdminContext from "./context/AdminContext";
import { useState } from "react";


function App() {
  const [menuSelected, setMenuSelected] = useState('home')

  const providerValue = {
    menuSelected,
    setMenuSelected
  }


  return <MainPageStyled>
            <AdminContext.Provider value={providerValue}>
              <LeftCard />
              <div className="center"></div>
              <Navbar />
            </AdminContext.Provider>
        
        </MainPageStyled>;
}

const MainPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #212121;
  color: aliceblue;
  padding: 5rem;
  

  .center{
    flex: 3;
    background-color: red;
  }



`;

export default App;
