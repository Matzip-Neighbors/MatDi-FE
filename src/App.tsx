import Router from "./components/Router";
import styled from "styled-components";
import { HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      <Title>MatDi</Title>
      <Router />
    </HelmetProvider>
  );
}

export default App;
