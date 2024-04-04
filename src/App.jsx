import styled from "styled-components";
import LeftCard from "./components/leftCard/LeftCard";

function App() {
  return <MainPageStyled>
    
            <LeftCard />
        
          <div className="center"></div>
          <div className="right"></div>
        </MainPageStyled>;
}

const MainPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-image: url("/fond.jpg");
  background-size: cover;
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
