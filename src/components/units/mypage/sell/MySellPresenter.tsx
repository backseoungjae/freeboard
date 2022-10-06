import React from 'react';
import MySellPaginationContainer from '../../../commons/pagination/MySellPaginationContainer';
import DOMPurify from 'dompurify';
import { IMySellPresenter } from './MySellTypes';
import * as S from './MySellStyles';

export default function MySellPresenter(props: IMySellPresenter) {
  const soldItemsMap = props.soldItems?.fetchUseditemsISold.map((el) => {
    return (
      <S.SoldBox key={el._id} id={el._id} onClick={props.productDetailMove}>
        <S.SoldTitleBox>
          {el.images[0] ? (
            <S.SoldImageBox>
              <S.SoldImage
                src={`https://storage.googleapis.com/${el.images[0]}`}
                alt="판매 이미지"
              />
            </S.SoldImageBox>
          ) : (
            <S.SoldImageBox>
              <S.SoldImage src="/images/logo.jpeg" alt="판매 이미지" />
            </S.SoldImageBox>
          )}
          <S.SoldName>
            <S.SubSoldText>상품명 : </S.SubSoldText>
            {el.name}
          </S.SoldName>
        </S.SoldTitleBox>
        <S.SoldContentBox>
          <S.SubSoldText>상품 내용 : </S.SubSoldText>
          {typeof window !== 'undefined' ? (
            <S.SoldContent
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(el.contents),
              }}
            ></S.SoldContent>
          ) : (
            <S.SoldContent></S.SoldContent>
          )}
        </S.SoldContentBox>
        <S.SoldPriceBox>
          <S.SoldPrice>
            <S.SubSoldText>상품 가격 : </S.SubSoldText>
            {el.price.toLocaleString()}
          </S.SoldPrice>
          {el.buyer === null ? (
            <S.Sold pos={'no'}>
              <S.SubSoldText>판매 여부 : </S.SubSoldText>판매 중
            </S.Sold>
          ) : (
            <S.Sold pos={'sell'}>
              <S.SubSoldText>판매 여부 : </S.SubSoldText>판매 완료
            </S.Sold>
          )}
        </S.SoldPriceBox>
      </S.SoldBox>
    );
  });

  return (
    <S.Container>
      <S.SoldWrapper>
        <S.SoldHeaderInner>
          <S.SoldHeader>상품사진</S.SoldHeader>
          <S.SoldHeaderName>상품이름</S.SoldHeaderName>
          <S.SoldHeaderContent>상품내용</S.SoldHeaderContent>
          <S.SoldHeaderPrice>상품가격</S.SoldHeaderPrice>
          <S.SoldHeaderDate>판매여부</S.SoldHeaderDate>
        </S.SoldHeaderInner>
        <S.SoldInner>{soldItemsMap}</S.SoldInner>
      </S.SoldWrapper>
      <MySellPaginationContainer
        soldItems={props.soldItems}
        soldItemsCount={props.soldItemsCount}
        refetch={props.refetch}
      />
    </S.Container>
  );
}
