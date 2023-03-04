import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLogin } from '../../../libs/auth';

function KakaoAuthScreen() {
  // 1. destructure props
  // 2. lib hooks
  const [searchParams] = useSearchParams();
  const [kakaoLogin, loading] = useLogin('kakao');

  // 3. state hooks
  const [errorMessage, setErrorMessage] = useState('');

  // 4. query hooks
  // 5. form hooks
  // 6. calculate values
  // 7. effect hooks
  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      kakaoLogin({ variables: { code }, onError: (err) => setErrorMessage(err.message) });
    }
  }, []);

  // 8. handlers
  return <div>카카오 로그인</div>;
}

export { KakaoAuthScreen };
