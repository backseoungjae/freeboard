import React from 'react';
import * as S from './LoginStyles';
import { ILoginPresenterProps } from './LoginTyes';

export default function LoginPresenter(props: ILoginPresenterProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LoginTextBox>
          <S.LoginText>로그인</S.LoginText>
        </S.LoginTextBox>
        <S.InputInner>
          <S.InputBox>
            <S.Input
              name="email"
              placeholder="이메일 주소를 입력해주세요."
              type="text"
              onChange={props.onChangeLogin}
            />
          </S.InputBox>
          <S.InputBox>
            <S.Input
              name="password"
              placeholder="비밀번호를 입력해주세요."
              type="password"
              onChange={props.onChangeLogin}
            />
          </S.InputBox>
        </S.InputInner>
        <S.ButtonBox>
          <S.Button onClick={props.onClickLogin}>로그인</S.Button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
