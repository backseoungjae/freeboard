import React from 'react';
import PaginationContainer from '../../../commons/pagination/PaginationContainer';
import * as S from './BoardListStyles';
import { IBardList } from './BoardListTypes';

export default function BoardListPresenter(props: IBardList) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.InputBox>
          <S.Input
            placeholder="검색어를 입력해주세요."
            onChange={props.getDebounce}
          />
        </S.InputBox>
        <S.Inner>
          <S.ListTitle>게시글 목록</S.ListTitle>
          <S.HearderColl>
            <S.HearderBox>
              <S.HeaderId>아이디</S.HeaderId>
              <S.HeaderTitle>제목</S.HeaderTitle>
            </S.HearderBox>
            <S.HearderBox>
              <S.HeaderWriter>작성자</S.HeaderWriter>
              <S.HeaderDate>날짜</S.HeaderDate>
            </S.HearderBox>
          </S.HearderColl>
          {props.dataMap}
        </S.Inner>
        <PaginationContainer
          data={props.data}
          dataMap={props.dataMap}
          refetch={props.refetch}
          dataBoardsCount={props.dataBoardsCount}
        />
      </S.Wrapper>
      <S.ButtonBox>
        <S.Button onClick={props.onClickMoveNew}>게시물 등록</S.Button>
      </S.ButtonBox>
    </S.Container>
  );
}
