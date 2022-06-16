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
    margin-bottom: 1rem;
    &:focus {
      outline: none;
    }
  }
`;

const Button = styled.button`
  display: flex;
  margin: 0 auto;
  padding: 0.5rem 2rem;
  font-size: 18px;
  background-color: skyblue;
  border: none;

  border-radius: 1.2rem;
  cursor: pointer;
`;

interface SignUpForm {
  email: string;
  verifiedNumber: string;
  password: string;
  confirmedpassword: string;
  nickname: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpForm>({ mode: "onChange" });

  const onValid = (data: SignUpForm) => {
    if (data.password !== data.confirmedpassword) {
      setError(
        "confirmedpassword",
        { message: "비밀번호가 맞지 않습니다." },
        { shouldFocus: true }
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("email", {
          required: "이메일은 필수 항목입니다.",
          validate: {
            nofuck: (value) =>
              value.startsWith("fuck") ? "비속어는 허용되지 않습니다." : true,
          },
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "메일 계정을 확인해주세요.",
          },
        })}
        type="email"
        name="email"
        placeholder="이메일"
      />
      <input
        {...register("verifiedNumber", {
          required: "인증번호는 필수 항목입니다.",
        })}
        type="number"
        name="verifiedNumber"
        placeholder="인증번호"
      />
      <input
        {...register("password", {
          required: "비밀번호는 필수 항목입니다.",
          validate: {
            nofuck: (value) =>
              value.startsWith("fuck") ? "비속어는 허용되지 않습니다." : true,
          },
          minLength: 6,
        })}
        type="password"
        name="password"
        placeholder="비밀번호"
        required
      />

      <input
        {...register("confirmedpassword", {
          required: "비밀번호를 확인해주세요.",
        })}
        type="password"
        name="confirmedpassword"
        placeholder="비밀번호 확인"
      />
      <span style={{ color: "red" }}>{errors?.confirmedpassword?.message}</span>
      <input
        {...register("nickname", {
          required: "닉네임은 필수 항목입니다.",
          validate: {
            nofuck: (value) =>
              value.startsWith("fuck") ? "비속어는 허용되지 않습니다." : true,
          },
          minLength: {
            value: 5,
            message: "닉네임이 너무 짧습니다.",
          },
        })}
        type="text"
        name="nickname"
        placeholder="닉네임"
      />
      <Button disabled={!errors}>회원가입</Button>
    </Form>
  );
};

export default SignUp;
