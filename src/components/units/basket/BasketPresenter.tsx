import React from 'react';
import { newHour } from '../../../commons/Date';
import * as S from './BasketStyles';
import { IBasketPresenter } from './BasketTypes';

export default function BasketPresenter(props: IBasketPresenter) {
  // typeError: map is not a function error로 []로 만들기 위해 Array.from()사용 하여 map 사용
  const basketsMap = Array.from(props.baskets).map((el) => {
    return (
      <S.BasketBox onClick={props.productDetailMove} key={el._id} id={el._id}>
        <S.BasketDateBox>
          <S.BasketDate>{`등록일 : ${newHour(el.createdAt)}`}</S.BasketDate>
        </S.BasketDateBox>
        <S.BasketTitle>{el.name}</S.BasketTitle>
        <S.BasketImg
          src={`https://storage.googleapis.com/${el.images[0]}`}
          alt="상품 이미지"
        />
        <S.BasketSellerBox>
          <S.BasketText>{`판매자: ${el.seller.name}`}</S.BasketText>
        </S.BasketSellerBox>
        <S.BasketRemarkBox>
          <S.BasketText>{el.remarks}</S.BasketText>
        </S.BasketRemarkBox>
        <S.BasketTagBox>
          {el.tags.map((el, i: number) => (
            <S.BasketTag key={i}>{`# ${el}`}</S.BasketTag>
          ))}
        </S.BasketTagBox>
      </S.BasketBox>
    );
  });

  return (
    <S.Container>
      <S.Wrapper>{basketsMap}</S.Wrapper>
    </S.Container>
  );
}
