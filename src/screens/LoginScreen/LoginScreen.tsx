import { Stack } from '@mui/material';
import { Layout, LoginButton } from '../../components';

const { VITE_KAKAO_LOGIN_PATH } = import.meta.env;

function LoginScreen() {
  // 1. destructure props
  // 2. lib hooks
  // 3. state hooks
  // 4. query hooks
  // 5. form hooks
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
        }}
      >
        <Stack spacing={4} css={{ justifyContent: 'center', alignItems: 'center' }}>
          <LoginButton href={VITE_KAKAO_LOGIN_PATH} backgroundColor="#FFE500">
            카카오로 로그인
          </LoginButton>
          {/* <LoginButton backgroundColor="#0D1117" color="#FFF"> */}
          {/*  GITHUB로 로그인 */}
          {/* </LoginButton> */}
          {/* <LoginButton backgroundColor="#FFF">구글로 로그인</LoginButton> */}
        </Stack>
      </Stack>
    </Layout>
  );
}

export { LoginScreen };
