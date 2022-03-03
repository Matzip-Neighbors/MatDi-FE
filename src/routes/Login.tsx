import styled from "styled-components";

const InputContainer = styled.div`
  width: 10rem;
  margin: 20rem auto;
  padding: 1.8rem;
`;

const User = styled.h3`
  display: flex;
  justify-content: end;
  opacity: 0.3;
  font-size: 12px;
  position: relative;
  left: 1.6rem;
  bottom: 0.8rem;
`;
const Input = styled.input`
  display: flex;
  padding: 0.6rem 0.8rem;
  margin: 1rem auto;
`;

const LoginButton = styled.div`
  margin: -20rem auto;
  margin-left: 11rem;
`;

const Login = () => {
  const CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/api/user/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <InputContainer>
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="password" />
        <User>회원가입 로그인</User>
      </InputContainer>
      <a href={KAKAO_AUTH_URL}>
        <LoginButton>
          <img src={require("../img/kakao_logo.png")} alt="kakao_logo" />
        </LoginButton>
      </a>
    </>
  );
};

export default Login;
