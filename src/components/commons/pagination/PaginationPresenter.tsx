import React from 'react';
import * as S from './PaginationStyles';
import { IPaginationPresenter } from './PaginationTypes';

export default function PaginationPresenter(props: IPaginationPresenter) {
  return (
    <S.PaginationInner>
      <S.PaginationButton onClick={props.onClickPrev}>
        <S.ImageBox src="/images/left.png" alt="leftArrow" />
      </S.PaginationButton>
      {props.renderPageNumbers}
      <S.PaginationButton onClick={props.onClickNext}>
        <S.ImageBox src="/images/right.png" alt="right" />
      </S.PaginationButton>
    </S.PaginationInner>
  );
}
