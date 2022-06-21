import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Title = styled.title`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  font-weight: 600;
  font-size: 1.2rem;
  color: black;
`;

const Header = () => {
  return (
    <header>
      <nav>
        <List>
          <li>menu</li>
          <li>
            <Title>MatDi</Title>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </List>
      </nav>
    </header>
  );
};

export default Header;
