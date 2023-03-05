import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../axios';

type LoginType = 'kakao' | 'github' | 'google';

export const useSignup: () => [
  ({
    variables,
    onError,
  }: {
    variables: { nickname: string; email: string; gender: string; birth: string };
    onError: (err: Error) => void;
  }) => void,
  { loading: boolean }
] = () => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);

  return [
    ({
      variables,
      onError,
    }: {
      variables: { nickname: string; email: string; gender: string; birth: string };
      onError: (error: Error) => void;
    }) => {
      setLoading(true);
      httpClient
        .post<{ data: { token: string; email: string; nickname: string } }>(
          '/users/signup',
          variables
        )
        .then((response) => {
          const { token, email, nickname } = response.data.data;
          if (token && email && nickname) {
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            localStorage.setItem('nickname', nickname);
            navigator('/', { replace: true });
          }
        })
        .catch((error) => onError(error))
        .finally(() => setLoading(false));
    },
    {
      loading,
    },
  ];
};

export const useLogin: (
  type: LoginType
) => [
  ({ variables, onError }: { variables: { code: string }; onError: (err: Error) => void }) => void,
  { loading: boolean }
] = (type) => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);

  return [
    ({ variables, onError }: { variables: { code: string }; onError: (error: Error) => void }) => {
      setLoading(true);
      httpClient
        .post<{ data: { token: string; email: string; nickname: string } }>(
          '/users/kakao/login',
          variables
        )
        .then((response) => {
          const { token, email, nickname } = response.data.data;
          if (!token && !nickname) {
            navigator('/signup', { state: { email }, replace: true });
          }
          localStorage.setItem('token', token);
          localStorage.setItem('email', email);
          localStorage.setItem('nickname', nickname);
          navigator('/', { replace: true });
        })
        .catch((error) => onError(error))
        .finally(() => setLoading(false));
    },
    {
      loading,
    },
  ];
};
