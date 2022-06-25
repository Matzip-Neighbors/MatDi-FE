import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import KakaoLogin from "react-kakao-login";
import Layout from "../components/Layout";

const Form = styled.form`
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

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  position: relative;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
  left: 120%;
  cursor: pointer;
  font-weight: "600";
  opacity: "0.4";
`;

const KaKaoLink = styled.a`
  position: relative;
  bottom: 19rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

interface LoginForm {
  email: string;
  password: string;
}

// const { Kakao } = window;
// Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);

const Login = () => {
  const CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;
  const REDIRECT_URI = process.env.API_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const { register, handleSubmit } = useForm<LoginForm>({ mode: "onChange" });
  const onValid = (data: LoginForm) => {
    if (!data.email && !data.password) return;
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("email", { required: "이메일을 입력해주세요." })}
          type="email"
          name="email"
          placeholder="이메일을 입력하세요"
        />
        <Input
          {...register("password", { required: "이메일을 입력해주세요" })}
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
        />
        <NavLink to="/signup">회원가입</NavLink>
      </Form>
      <KaKaoLink href={KAKAO_AUTH_URL}>
        <KakaoLogin
          token={String(process.env.REACT_APP_KAKAO_API_KEY)}
          onSuccess={() => {
            console.log("로그인성공");
          }}
          onFail={(err) => {
            console.log("로그인실패", err);
          }}
        ></KakaoLogin>
      </KaKaoLink>
      <p id="token-result"></p>
    </Layout>
  );
};

export default Login;
