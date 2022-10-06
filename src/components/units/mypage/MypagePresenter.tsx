import React from 'react';
import * as S from './MypageStyles';
import { IMypagePresenter } from './MypageTypes';
import SidebarContainer from './sidebar/SidebarContainer';

export default function MypagePresenter(props: IMypagePresenter) {
  return (
    <S.Container>
      <S.Wrapper>
        <SidebarContainer />
        <S.Inner>
          <S.TabInner>
            {props.tabList.map((el, i: number) => (
              <S.TabButton
                key={el.id}
                onClick={() => props.contentChange(i)}
                isActive={el.id === props.contentItem.id}
              >
                {el.tab}
              </S.TabButton>
            ))}
          </S.TabInner>
          {props.contentItem.content}
        </S.Inner>
      </S.Wrapper>
    </S.Container>
  );
}
