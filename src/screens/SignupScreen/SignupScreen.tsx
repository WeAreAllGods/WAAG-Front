import { useLocation } from 'react-router-dom';
import {
  Button,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  TextFieldProps,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import React, { useState, ForwardedRef } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CakeIcon from '@mui/icons-material/Cake';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Layout } from '../../components';
import { useSignup } from '../../libs/auth';

const SignupTextField = React.forwardRef(
  (props: Omit<TextFieldProps, 'ref'>, ref?: ForwardedRef<HTMLDivElement>) => {
    const { label, ...rest } = props;
    return (
      <Stack ref={ref} css={{ width: '100%' }}>
        <InputLabel required>{label}</InputLabel>
        <TextField fullWidth {...rest} />
      </Stack>
    );
  }
);
const signupSchema = yup.object({
  nickname: yup.string().required().min(2),
  email: yup.string().required(),
  gender: yup.string().oneOf(['male', 'female']).required(),
  birth: yup.string().required(),
});

function SignupScreen() {
  // 1. destructure props
  // 2. lib hooks
  const location = useLocation();
  const [signup, { loading }] = useSignup();

  // 3. state hooks
  const [email] = useState<string>(location.state.email);

  // 4. query hooks

  // 5. form hooks
  const {
    formState: { errors },
    register,
    getValues,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      nickname: '',
      email,
      gender: '',
      birth: '',
    },
    resolver: yupResolver(signupSchema),
  });

  // 6. calculate values
  // 7. effect hooks
  // 8. handlers
  return (
    <Layout>
      <Stack
        boxShadow={2}
        css={{
          maxWidth: '25%',
          margin: '0 auto',
          borderRadius: '12px',
          padding: '24px',
        }}
      >
        <Stack
          spacing={3}
          css={{
            width: '100%',
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <SignupTextField
            {...register('nickname')}
            label="닉네임"
            helperText="닉네임은 최소3글자 이상으로 구성되어야합니다."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            error={!!errors.nickname}
          />
          <SignupTextField
            label="이메일"
            value={getValues('email')}
            disabled
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
            error={!!errors.email}
          />

          <SignupTextField
            label="성별"
            {...register('gender')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleAltOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
          <SignupTextField
            label="생일"
            {...register('birth')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CakeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Button
          css={{ marginTop: '24px' }}
          onClick={handleSubmit(async ({ nickname, email, gender, birth }) => {
            await signup({
              variables: { nickname, email, gender, birth },
              onError: (err) => console.log(err),
            });
          })}
        >
          회원가입
        </Button>
      </Stack>
    </Layout>
  );
}

export { SignupScreen };
