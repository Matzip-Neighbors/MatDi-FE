import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50%;
  padding: 0 2rem;
  input {
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 1;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1.5rem;
  }
`;

const Button = styled.button`
  display: flex;
  margin: 0 auto;
  padding: 1rem 3rem;
  font-size: 18px;
  background-color: skyblue;
  border: none;
  border-radius: 1.2rem;
`;

const SignUp = (e: any) => {
  const { register } = useForm();

  return (
    <Form>
      <input
        {...register("이메일")}
        type="email"
        placeholder="이메일"
        required
      />
      <input {...register("인증번호")} type="number" placeholder="인증번호" />
      <input
        {...register("비밀번호")}
        type="password"
        placeholder="비밀번호"
        required
      />
      <input
        {...register("비밀번호 확인")}
        type="password"
        placeholder="비밀번호 확인"
      />
      <input {...register("닉네임")} type="text" placeholder="닉네임" />
      <Button>회원가입</Button>
      {/* <Form>
        <input type="email" placeholder="이메일" />
        <input type="number" placeholder="인증번호" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
        <input type="password" placeholder="비밀번호 확인" />
        <Button>회원가입</Button>
      </Form> */}
    </Form>
  );
};

export default SignUp;
