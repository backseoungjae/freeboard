import React from 'react';
import { Modal } from 'antd';
import Head from 'next/head';
import 'antd/dist/antd.css';
import * as S from './HeaderStyles';
import { IHeaderPresenter } from './HeaderTypes';

export default function HeaderPresenter(props: IHeaderPresenter) {
  return (
    <S.Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.Inner>
        <S.Logo
          onClick={props.boardListPush}
          src="/images/logo.jpeg"
          alt="logo"
        />
        {props.data ? (
          <S.InnerBox>
            <S.ProfileInner>
              <S.ProfileBox onClick={props.handleDropdown}>
                <S.ProfileImg src="/images/profile.png" alt="로그인 이미지" />
                <S.LoginName>{`${props.data.fetchUserLoggedIn.name}님`}</S.LoginName>
                <S.ProfileArrow
                  isActive={props.isOpen}
                  src="/images/profileArrow.png"
                  alt="화살표"
                />
              </S.ProfileBox>
              {/* 드롭다운 */}
              <S.DropBox isActive={props.isOpen}>
                <S.DropTextBox>
                  <S.DropText>{`보유 포인트 ${props.data.fetchUserLoggedIn.userPoint.amount.toLocaleString()}P`}</S.DropText>
                </S.DropTextBox>
                <S.DropTextBox>
                  <S.ChargeButton onClick={props.onToggleModal}>
                    충전하기
                  </S.ChargeButton>
                </S.DropTextBox>
                <S.DropTextBox>
                  <S.BusketInner onClick={props.basketMove}>
                    <S.Button>장바구니</S.Button>
                    <S.BusketBox>
                      <S.BusketText>{props.count}</S.BusketText>
                    </S.BusketBox>
                  </S.BusketInner>
                </S.DropTextBox>
                <S.DropTextBox>
                  <S.LoginOutButton onClick={props.logOut}>
                    로그 아웃
                  </S.LoginOutButton>
                </S.DropTextBox>
              </S.DropBox>
            </S.ProfileInner>
            {/* 충전 모달 */}
            {props.isModalVisible && (
              <Modal
                style={{ padding: '20px 40px', boxSizing: 'border-box' }}
                onCancel={props.onToggleModal}
                visible={true}
                footer={
                  props.price ? (
                    <S.ResultButton key="" onClick={props.requestPay}>
                      충전하기
                    </S.ResultButton>
                  ) : (
                    <S.NonButton disabled key="" onClick={props.requestPay}>
                      충전하기
                    </S.NonButton>
                  )
                }
              >
                <S.PaymentWrapper>
                  <S.ChargeTitle>충전하실 금액을 선택해주세요!</S.ChargeTitle>
                  <S.SelectInner onChange={props.onChangePrice}>
                    <S.Option value="selectbox" selected disabled>
                      포인트 선택
                    </S.Option>
                    <S.Option value="100">100</S.Option>
                    <S.Option value="500">500</S.Option>
                    <S.Option value="1000">2,000</S.Option>
                    <S.Option value="2000">5,000</S.Option>
                  </S.SelectInner>
                </S.PaymentWrapper>
              </Modal>
            )}
          </S.InnerBox>
        ) : (
          <S.InnerBox>
            <S.LoginButton login="signup" onClick={props.signupPush}>
              회원 가입
            </S.LoginButton>
            <S.LoginButton login="login" onClick={props.loginPush}>
              로그인
            </S.LoginButton>
          </S.InnerBox>
        )}
      </S.Inner>
    </S.Wrapper>
  );
}
