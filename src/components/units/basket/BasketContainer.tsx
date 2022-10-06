import { useRouter } from 'next/router';
import React, { MouseEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { newBasketsState } from '../../commons/store';
import BasketPresenter from './BasketPresenter';

export default function BasketContainer() {
  // RecoilState 사용하여 localStorage에 담아 둔 장바구니 가져옴
  const [baskets, setBaskets] = useRecoilState(newBasketsState);

  // next 특성상 ssr으로 인하여 localStorage 못 불러 오는 문제 useEffect를 사용하여 렌더링 시 가져올 수 있도록 사용
  useEffect(() => {
    setBaskets(JSON.parse(localStorage.getItem('newBaskets') || '[]'));
  }, []);

  const router = useRouter();

  // 장바구니 카드 클릭 시 해당 상품 상세페이지로 이동 이벤트 핸들러
  const productDetailMove = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/products/${e.currentTarget.id}`);
  };

  return (
    <BasketPresenter baskets={baskets} productDetailMove={productDetailMove} />
  );
}
