import { Container, makeStyles, Typography, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
  authCode: string;
  nickname: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .max(255)
    .required('Email is required')
    .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Email is invalid'),
  password: yup.string().required('Password is required').min(8).max(120),
  confirmPassword: yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  nickname: yup.string().required().min(2).max(25),
});

const useStyles = makeStyles((theme) => ({
  heading: {
    textAlign: 'center',
    margin: theme.spacing(1, 0, 4),
  },
  submitButton: {
    marginTop: theme.spacing(4),
  },
}));

const SignUp = () => {
  const { heading, submitButton } = useStyles();
  const [json, setJson] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({ resolver: yupResolver(schema) });

  const onValid = (data: SignUpForm) => {
    setJson(JSON.stringify(data, null, 2));
  };

  return (
    <Container maxWidth="xs">
      <Typography className={heading} variant="h4">
        Create Account
      </Typography>
      <form onSubmit={handleSubmit(onValid)}>
        <TextField
          {...register('email')}
          variant="outlined"
          margin="normal"
          label="email"
          fullWidth
          required
          error={!!errors.email?.message}
          helperText={errors.email?.message}
        />
        <TextField
          {...register('password')}
          variant="outlined"
          margin="normal"
          label="password"
          type="password"
          fullWidth
          required
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          {...register('confirmPassword')}
          variant="outlined"
          margin="normal"
          type="password"
          label="confirmPassword"
          fullWidth
          required
          error={!!errors.confirmPassword?.message}
          helperText={errors.confirmPassword?.message}
        />
        <TextField
          {...register('authCode')}
          variant="outlined"
          margin="normal"
          label="authCode"
          fullWidth
          required
          error={!!errors.authCode?.message}
          helperText={errors.authCode?.message}
        />
        <TextField
          {...register('nickname')}
          variant="outlined"
          margin="normal"
          label="nickname"
          fullWidth
          required
          error={!!errors.nickname}
          helperText={errors.nickname?.message}
        />
        <Button type="submit" fullWidth variant="contained" color="primary" className={submitButton}>
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;
