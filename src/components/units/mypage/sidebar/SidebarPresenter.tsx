import React from 'react';
import * as S from './SidebarStyles';
import { ISidebarPresenter } from './SidebarTypes';

export default function SidebarPresenter(props: ISidebarPresenter) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Inner>
          {props.data?.fetchUserLoggedIn.picture ? (
            <S.ProfileImg
              src={props.data?.fetchUserLoggedIn.picture}
              alt="프로필 사진"
            />
          ) : (
            <S.ProfileImg src="/images/profile.png" alt="프로필 사진" />
          )}
        </S.Inner>
        <S.Inner>
          <S.Profile>{`${props.data?.fetchUserLoggedIn.name} 님`}</S.Profile>
        </S.Inner>
        <S.Inner>
          <S.Point>보유 포인트</S.Point>
          <S.Point>{`${props.data?.fetchUserLoggedIn.userPoint.amount.toLocaleString()} P`}</S.Point>
        </S.Inner>
      </S.Wrapper>
    </S.Container>
  );
}
