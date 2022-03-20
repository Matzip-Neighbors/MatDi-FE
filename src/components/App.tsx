import Router from "./Router";
import styled from "styled-components";

const Title = styled.title`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  font-weight: 600;
  font-size: 1.2rem;
`;

function App() {
  return (
    <>
      <Title>MatDi</Title>
      <Router />
    </>
  );
}

export default App;
