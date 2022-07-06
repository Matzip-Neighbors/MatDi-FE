import styled from "styled-components";
import { useForm } from "react-hook-form";
import KakaoLogin from "react-kakao-login";
import { Link } from "react-router-dom";

const InputContainer = styled.form`
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
    border-bottom: 1px solid #ccc;
    position: relative;
    right: 50%;
  }
`;

const Input = styled.input`
  display: flex;
  padding: 0.6rem 0.8rem;
  margin: 1rem auto;
  opacity: 0.5;
`;

// const SignUp = styled.h3`
//   text-decoration: none;
//   font-size: 12px;
//   opacity: 0.4;
//   position: relative;
//   margin-left: 0.5rem;
//   margin-bottom: 0.5rem;
//   left: 100%;
//   cursor: pointer;
//   text-decoration: none; /* 링크의 밑줄 제거 */
//   color: inherit; /* 링크의 색상 제거 */
// `;

const Login = () => {
  const CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/api/user/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const { register } = useForm();
  return (
    <>
      <InputContainer>
        <Input
          {...register("이메일")}
          type="email"
          placeholder="이메일을 입력하세요"
        />
        <Input
          {...register("비밀번호")}
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            fontSize: "12px",
            position: "relative",
            marginLeft: "0.5rem",
            marginBottom: "0.5rem",
            left: "120%",
            cursor: "pointer",
            fontWeight: "600",
            opacity: "0.4",
          }}
        >
          회원가입
        </Link>
      </InputContainer>
      <a href={KAKAO_AUTH_URL}>
        <KakaoLogin
          token={String(process.env.REACT_APP_KAKAO_API_KEY)}
          onSuccess={() => {
            console.log("로그인성공");
          }}
          onFail={(err) => {
            console.log("로그인실패", err);
          }}
          style={{
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
        >
          <img src={require("../img/kakao_logo.png")} alt="kakao_logo" />
        </KakaoLogin>
      </a>
    </>
  );
};

export default Login;