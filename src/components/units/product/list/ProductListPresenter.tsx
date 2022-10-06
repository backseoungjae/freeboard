import React, { MouseEvent } from 'react';
import { getTime } from '../../../../commons/Date';
import InfiniteScroll from 'react-infinite-scroller';
import * as S from './ProductListStyles';

interface IProductListPresenter {
  data?: {
    fetchUseditems: [
      {
        _id: string;
        name: string;
        remarks: string;
        price: number;
        tags: string[];
        images: string[];
        pickedCount: number;
        createdAt: Date;
        seller: {
          name: string;
          email: string;
        };
      }
    ];
  };
  onLoadMore: () => void;
  onClickMoveDetail: (el: {
    _id: string;
  }) => (e: MouseEvent<HTMLDivElement>) => void;
  onClickMoveWrite: () => void;
}

export default function ProductListPresenter(props: IProductListPresenter) {
  return (
    <S.Wrapper>
      <S.ButtonBox>
        <S.Button onClick={props.onClickMoveWrite}>상품 등록</S.Button>
      </S.ButtonBox>
      <S.SubWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          <S.Container>
            {props.data?.fetchUseditems.map((el) => (
              <S.ItemInner
                onClick={props.onClickMoveDetail(el)}
                key={el._id}
                id={el._id}
              >
                {el.images[0] ? (
                  <S.ItemImg
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                    alt="판매 이미지"
                  />
                ) : (
                  <S.ItemImg src="/images/logo.jpeg" alt="판매 이미지" />
                )}
                <S.Inner>
                  <S.TitleBox>
                    <S.ItemText>{el.name}</S.ItemText>
                  </S.TitleBox>
                  <S.TextBox>
                    <S.ItemText>{el.price} 원</S.ItemText>
                    <S.CreateTime>
                      {getTime(new Date()) - getTime(el.createdAt)}시간 전
                    </S.CreateTime>
                  </S.TextBox>
                </S.Inner>
              </S.ItemInner>
            ))}
          </S.Container>
        </InfiniteScroll>
      </S.SubWrapper>
    </S.Wrapper>
  );
}
