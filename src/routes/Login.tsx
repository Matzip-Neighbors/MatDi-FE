import styled from "styled-components";
import { useForm } from "react-hook-form";
import PageTitle from "../components/PageTitle";
import { device } from "../media";

const LoginContainer = styled.main`
  border: 2px solid black;
  margin: 2rem;
  border-radius: 2rem;
  background-color: wheat;
`;

const Form = styled.form`
  width: 10rem;
  margin: 15rem auto;
  input {
    width: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    background-color: transparent;
    border-bottom: 2px solid #ccc;
    position: relative;
    right: 50%;
    &:first-child,
    &:nth-of-type(2) {
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 255, 0.2);
    }
  }
`;

const Input = styled.input`
  display: flex;
  justify-content: space-between;
  padding: 0.6rem 0.8rem;
  margin: 1rem auto;
  opacity: 0.5;
  &:last-of-type {
    margin: 3rem 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
  }
`;

const ErrorMessage = styled.div`
  width: 120%;
  color: red;
`;

const ForgotPassword = styled.h5`
  display: flex;
  width: 100%;
  padding-left: 1rem;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 0.3;
  }
`;

// const SignUpLink = styled(Link)`
//   text-decoration: none;
//   font-size: 12px;
//   position: relative;
//   margin-left: 0.5rem;
//   margin-bottom: 0.5rem;
//   left: 120%;
//   cursor: pointer;
//   font-weight: 600;
//   opacity: 0.4;
// `;

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onChange" });

  const onValid = (data: LoginForm) => {
    if (!data.email && !data.password) return;
  };
  return (
    <LoginContainer>
      <PageTitle title="Log In" />
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "올바르지 않은 이메일 주소입니다.",
            },
          })}
          type="email"
          placeholder="이메일"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <Input
          {...register("password", {
            required: "비밀번호를 입력해주세요",
            validate: (value: string) =>
              watch("password") !== value ? "비밀번호가 맞지 않습니다." : "",
          })}
          type="password"
          placeholder="비밀번호"
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        {/* <SignUpLink to="/signup">회원가입</SignUpLink> */}
        <Input type="submit" value="Sign in" />
        <ForgotPassword>비밀번호를 잊으셨습니까?</ForgotPassword>
      </Form>
    </LoginContainer>
  );
};

export default Login;
