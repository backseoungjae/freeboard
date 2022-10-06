import React from 'react';
import MyPickPaginationContainer from '../../../commons/pagination/MyPickPaginationContainer';
import * as S from './MyPickStyles';
import { IMyPickPresenter } from './MyPickTypes';

export default function MyPickPresenter(props: IMyPickPresenter) {
  const pickItemsMap = props.pickList?.fetchUseditemsIPicked.map((el) => {
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
          <S.SoldSeller>
            <S.SubSoldText>판매자 : </S.SubSoldText>
            {el.seller.name}
          </S.SoldSeller>
        </S.SoldTitleBox>
        <S.SoldContentBox>
          <S.SoldName>
            <S.SubSoldText>상품명 : </S.SubSoldText>
            {el.name}
          </S.SoldName>
          <S.PickCount>
            <S.SubSoldText>찜 갯수 : </S.SubSoldText>
            {el.pickedCount}
          </S.PickCount>
        </S.SoldContentBox>
        <S.SoldPriceBox>
          <S.SoldPrice>
            <S.SubSoldText>상품 가격 : </S.SubSoldText>
            {el.price.toLocaleString()}
          </S.SoldPrice>
          {el.buyer === null ? (
            <S.Sold pos={'no'}>
              <S.SubSoldText>상품 여부 : </S.SubSoldText>판매 중
            </S.Sold>
          ) : (
            <S.Sold pos={'sell'}>
              <S.SubSoldText>상품 여부 : </S.SubSoldText> 판매 완료
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
          <S.SoldHeaderSeller>판매자</S.SoldHeaderSeller>
          <S.SoldHeaderName>상품이름</S.SoldHeaderName>
          <S.SoldHeaderPickCount>찜 갯수</S.SoldHeaderPickCount>
          <S.SoldHeaderPrice>상품가격</S.SoldHeaderPrice>
          <S.SoldHeaderBuy>판매여부</S.SoldHeaderBuy>
        </S.SoldHeaderInner>
        <S.SoldInner>{pickItemsMap}</S.SoldInner>
      </S.SoldWrapper>
      <MyPickPaginationContainer
        pickList={props.pickList}
        refetch={props.refetch}
        pickListCount={props.pickListCount}
      />
    </S.Container>
  );
}
