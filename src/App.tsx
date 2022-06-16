import styled from "styled-components";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import GlobalStyle from "./styles/GlobalStyle";

const Title = styled.title`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  font-weight: 600;
  font-size: 1.2rem;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Title>MatDi</Title>
      <BrowserRouter>
        <Link to="/login">Login</Link>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
