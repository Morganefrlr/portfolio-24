import styled from "styled-components";
import LeftCard from "./components/leftCard/LeftCard";
import Navbar from "./components/navbar/Navbar";

function App() {
  return <MainPageStyled>
    
            <LeftCard />
        
          <div className="center"></div>
          <div className="right">
            <Navbar />
          </div>
        </MainPageStyled>;
}

const MainPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #212121;
  color: aliceblue;
  padding: 5rem;
  gap: 1rem;

  .center{
    flex: 3;
    background-color: red;
  }
  .right{
    flex: 0.5;
    background-color:green;
  }


`;

export default App;
