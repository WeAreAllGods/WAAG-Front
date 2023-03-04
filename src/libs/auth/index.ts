import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '../axios';

type LoginType = 'kakao' | 'github' | 'google';

export const useLogin: (
  type: LoginType
) => [
  ({ variables, onError }: { variables: { code: string }; onError: (err: Error) => void }) => void,
  { loading: boolean }
] = () => {
  const navigator = useNavigate();
  const [loading, setLoading] = useState(false);

  return [
    ({ variables, onError }: { variables: { code: string }; onError: (error: Error) => void }) => {
      setLoading(true);
      httpClient
        .post<{ token: string; nickname: string }>('/users/kakao/login', variables)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => onError(error))
        .finally(() => setLoading(false));
    },
    {
      loading,
    },
  ];
};
