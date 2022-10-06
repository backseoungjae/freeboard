import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../store';
import HeaderPresenter from './HeaderPresenter';
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  LOGGED_IN,
  LOGOUT_USER,
} from './HeaderQueries';

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Header() {
  const [logoutUser] = useMutation(LOGOUT_USER);
  const { data } = useQuery(LOGGED_IN);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [createPoint] = useMutation(CREATE_POINT_TRANSACTION_OF_LOADING);

  // 드롭다운 이벤트
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const router = useRouter();

  // 장바구니 카운트
  const [count, setCount] = useState<number>(0);
  const [basketItems, setBasketItems] = useState<[]>([]);

  // 장바구니 이동
  const basketMove = () => {
    router.push('/basket');
    setIsOpen(false);
  };

  // 충전 금액
  const [price, setPrice] = useState<string>('');

  // 장바구니 카운트
  useEffect(() => {
    const newBaskets = JSON.parse(localStorage.getItem('newBaskets') || '[]');

    if (newBaskets.length) {
      newBaskets.pop();
      setCount(newBaskets.length + 1);
    } else {
      setCount(0);
    }
    setBasketItems(newBaskets);
  }, [basketItems.length++]);

  // 충전하기 모달 버튼
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  // 모달 버튼
  const onToggleModal = () => {
    setIsModalVisible((prev) => !prev);
    setIsOpen(false);
  };

  // 충전금액
  const onChangePrice = (e: ChangeEvent<HTMLSelectElement>) => {
    setPrice(e.target.value);
  };

  // 결제 창
  const requestPay = () => {
    setIsModalVisible((prev) => !prev);
    const IMP = window.IMP; // 생략 가능
    IMP.init('imp49910675'); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        // merchant_uid: "ORD20180131-0000011",
        name: 'Point',
        amount: price,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: '010-1234-5678',
      },
      (rsp: any) => {
        if (rsp.success) {
          alert('결제에 성공 했습니다.');
          createPoint({
            variables: {
              impUid: rsp?.imp_uid,
            },
            refetchQueries: [
              {
                query: LOGGED_IN,
              },
            ],
          });
          router.push(`/products`);
        } else {
          alert('결제에 실패 했습니다. 다시 시도해 주세요!');
        }
      }
    );
  };

  const boardListPush = () => {
    router.push('/');
  };

  const signupPush = () => {
    router.push('/signup');
  };

  const loginPush = () => {
    router.push('/login');
  };

  const logOut = async () => {
    try {
      await logoutUser();
      setAccessToken('');
      window.localStorage.clear();
      window.localStorage.removeItem('accessToken');
      sessionStorage.clear();
      setIsOpen(false);
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
    <HeaderPresenter
      data={data}
      count={count}
      price={price}
      isModalVisible={isModalVisible}
      isOpen={isOpen}
      basketMove={basketMove}
      onToggleModal={onToggleModal}
      onChangePrice={onChangePrice}
      requestPay={requestPay}
      boardListPush={boardListPush}
      signupPush={signupPush}
      loginPush={loginPush}
      logOut={logOut}
      handleDropdown={handleDropdown}
    />
  );
}
