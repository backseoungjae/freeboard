import React from 'react';
import * as S from './SignupStyles';
import { ISignup } from './SignupTyes';

export default function SignupPresenter(props: ISignup) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LoginTextBox>
          <S.LoginText>회원가입</S.LoginText>
        </S.LoginTextBox>
        <S.InputInner>
          <S.InputBox>
            <S.Label>이름</S.Label>
            <S.Input
              name="name"
              onChange={props.onChangeName}
              placeholder="이름을 입력해주세요."
              type="text"
            />
            <S.ErrorText>{props.nameMessage}</S.ErrorText>
          </S.InputBox>
          <S.InputBox>
            <S.Label>이메일</S.Label>
            <S.Input
              name="email"
              onChange={props.onChageEmail}
              placeholder="이메일 주소를 입력해주세요."
              type="text"
            />
            <S.ErrorText>{props.emailMessage}</S.ErrorText>
          </S.InputBox>
          <S.InputBox>
            <S.Label>비밀번호</S.Label>
            <S.Input
              name="password"
              onChange={props.onChagePassword}
              placeholder="숫자또는특수문자1개포함,8자이상"
              type="password"
            />
            <S.ErrorText>{props.passwordMessage}</S.ErrorText>
          </S.InputBox>
          <S.InputBox>
            <S.Label>비밀번호 확인</S.Label>
            <S.Input
              onChange={props.onChagePasswordConfirm}
              placeholder="password를 확인해주세요."
              type="password"
            />
            <S.ErrorText>{props.passwordConfirmMessage}</S.ErrorText>
          </S.InputBox>
        </S.InputInner>
        <S.ButtonBox>
          <S.Button
            onClick={props.signupSubmit}
            disabled={
              !(
                props.isName &&
                props.isEmail &&
                props.isPassword &&
                props.isPasswordConfirm
              )
            }
          >
            회원가입
          </S.Button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
