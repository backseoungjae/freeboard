import { useRouter } from 'next/router';
import React, { MouseEvent } from 'react';
import * as S from './NavigtionStyles';

const NAV_MENUS = [
  {
    name: '라이브 게시판',
    page: '/boards',
  },
  {
    name: '라이브 상품',
    page: '/products',
  },
  {
    name: '마이페이지',
    page: '/mypage',
  },
];

export default function Navigtion() {
  const router = useRouter();

  const moveMenu = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) {
      router.push(e.target.id);
    }
  };

  const navMap = NAV_MENUS.map((el) => {
    return (
      <S.NavBox key={el.page}>
        <S.Nav onClick={moveMenu} id={el.page}>
          {el.name}
        </S.Nav>
      </S.NavBox>
    );
  });

  return (
    <S.Wrapper>
      <S.Inner>
        <S.NavInner>{navMap}</S.NavInner>
      </S.Inner>
    </S.Wrapper>
  );
}
