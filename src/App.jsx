import styled from "styled-components";

function App() {
  return <MainPageStyled>
    <div className="left"></div>
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

  .left{
    flex: 1.5;
    background-color: aqua;
  }
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
