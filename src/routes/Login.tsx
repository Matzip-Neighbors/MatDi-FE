import styled from "styled-components";

const InputContainer = styled.div`
  width: 10rem;
  margin: 20rem auto;
  input {
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 1;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
    position: relative;
    right: 50%;
  }
  h3 {
    display: flex;
    opacity: 0.4;
    font-size: 12px;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    left: 65%;
  }
`;

const Input = styled.input`
  display: flex;
  padding: 0.6rem 0.8rem;
  margin: 1rem auto;
  opacity: 0.5;
`;

const LoginButton = styled.div`
  margin: -18rem auto;
  margin-left: 11rem;
`;

const Login = () => {
  const CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/api/user/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <InputContainer>
        <Input type="email" name="email" placeholder="이메일을 입력하세요" />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
        />
        <h3>회원가입 로그인</h3>
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
