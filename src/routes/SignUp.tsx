import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25%;
  padding: 0 5rem;
  input {
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 1;
    border-bottom: 1px solid #ccc;
    margin-bottom: 2rem;
    &:focus {
      outline: none;
    }
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
  cursor: pointer;
`;

const SignUp = () => {
  const { register } = useForm();

  return (
    <Form>
      <input
        {...register("이메일", { required: "이메일은 필수 항목입니다." })}
        type="email"
        placeholder="이메일"
      />
      <input
        {...register("인증번호", { required: "인증번호는 필수 항목입니다." })}
        type="number"
        placeholder="인증번호"
      />
      <input
        {...register("비밀번호", { required: "비밀번호는 필수 항목입니다." })}
        type="password"
        placeholder="비밀번호"
        required
      />
      <input
        {...register("비밀번호 확인", { required: "필수 항목입니다." })}
        type="password"
        placeholder="비밀번호 확인"
      />
      <input
        {...register("닉네임", { required: "닉네임은 필수 항목입니다." })}
        type="text"
        placeholder="닉네임"
      />
      <Button>회원가입</Button>
    </Form>
  );
};

export default SignUp;
