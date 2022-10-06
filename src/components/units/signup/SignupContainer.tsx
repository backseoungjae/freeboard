import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import SignupPresenter from './SignupPresenter';
import { CREATE_USER } from './SignupQueries';

export default function SignupContainer() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [, setPasswordConfirm] = useState<string>('');

  // 오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState<string>('');
  const [emailMessage, setEmailMessage] = useState<string>('');
  const [passwordMessage, setPasswordMessage] = useState<string>('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>('');

  // 유효성 검사
  const [isName, setIsName] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);

  // 이름 유효성 검사
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

    if (name.length < 2 || name.length > 5) {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요. : )');
      setIsName(false);
    } else {
      setNameMessage('');
      setIsName(true);
    }
  };

  // email 유효성 검사
  const onChageEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요 : )');
      setIsEmail(false);
    } else {
      setEmailMessage('');
      setIsEmail(true);
    }
  };

  // password 유효성 검사
  const onChagePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요 : )'
      );
      setIsPassword(false);
    } else {
      setPasswordMessage('');
      setIsPassword(true);
    }
  };

  // password 확인
  const onChagePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfirm(passwordConfirmCurrent);

    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage('');
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage('비밀번호를 다시 확인해주세요 : )');
      setIsPasswordConfirm(false);
    }
  };

  const signupSubmit = async () => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            name,
            email,
            password,
          },
        },
      });
      router.push('/login');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <SignupPresenter
      nameMessage={nameMessage}
      emailMessage={emailMessage}
      passwordMessage={passwordMessage}
      passwordConfirmMessage={passwordConfirmMessage}
      isName={isName}
      isEmail={isEmail}
      isPassword={isPassword}
      isPasswordConfirm={isPasswordConfirm}
      onChangeName={onChangeName}
      onChageEmail={onChageEmail}
      onChagePassword={onChagePassword}
      onChagePasswordConfirm={onChagePasswordConfirm}
      signupSubmit={signupSubmit}
    />
  );
}
