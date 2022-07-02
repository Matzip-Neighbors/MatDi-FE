import styled from "styled-components";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import KakaoBtn from "../components/KakaoBtn";

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
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const { register, handleSubmit, resetField } = useForm<LoginForm>({
    mode: "onChange",
  });
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
      </Form>
      <KakaoBtn />
    </Layout>
  );
};

export default Login;
