import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../commons/store';
import LoginPresenter from './LoginPresenter';

const LOGIN_USER = gql`
  mutation ($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

type ILogin = {
  email: string;
  password: string;
};

export default function LoginContainer() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [login, setLogin] = useState<ILogin>({
    email: '',
    password: '',
  });

  const [loginUser] = useMutation(LOGIN_USER);

  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const onClickLogin = async () => {
    try {
      const res = await loginUser({
        variables: {
          ...login,
        },
      });
      const accessToken = res.data.loginUser.accessToken;
      setAccessToken(accessToken);
      localStorage.setItem('accessToken', accessToken);
      router.push('/');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <LoginPresenter onChangeLogin={onChangeLogin} onClickLogin={onClickLogin} />
  );
}
