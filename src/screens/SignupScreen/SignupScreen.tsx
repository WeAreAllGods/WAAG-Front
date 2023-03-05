import { useLocation } from 'react-router-dom';
import { Button, InputAdornment, InputLabel, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Layout } from '../../components';

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

  // 3. state hooks
  const [email] = useState<string>(location.state.email);

  // 4. query hooks
  // 5. form hooks
  const {
    formState: { errors },
    register,
    getValues,
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
          height: '50%',
          margin: '0 auto',
          borderRadius: '12px',
          padding: '24px',
        }}
      >
        <Stack
          spacing={2}
          css={{
            width: '100%',
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack css={{ width: '100%' }}>
            <InputLabel required>닉네임</InputLabel>
            <TextField
              {...register('nickname')}
              fullWidth
              required
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
          </Stack>
          <Stack css={{ width: '100%' }}>
            <InputLabel required>이메일</InputLabel>
            <TextField
              fullWidth
              required
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
          </Stack>

          {/* <TextField fullWidth {...register('gender')} /> */}
          {/* <TextField fullWidth {...register('birth')} /> */}
        </Stack>
        <Button css={{ marginTop: '32px' }}>fdafds</Button>
      </Stack>
    </Layout>
  );
}

export { SignupScreen };
