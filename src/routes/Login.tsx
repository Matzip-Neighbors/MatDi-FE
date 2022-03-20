import styled from "styled-components";
import { useForm } from "react-hook-form";
import KakaoLogin from "react-kakao-login";
import { Link } from "react-router-dom";

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

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {
    if (!data.email && !data.password) return;
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("email")}
          type="email"
          placeholder="이메일을 입력하세요"
        />
        <Input
          {...register("password")}
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
      </Form>

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
          position: "absolute",
          top: "55%",
          right: "30%",
        }}
      >
        <img src={require("../img/kakao_logo.png")} alt="kakao_logo" />
      </KakaoLogin>
    </>
  );
};

export default Login;
