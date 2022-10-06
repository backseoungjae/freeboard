import React from 'react';
import Dompurify from 'dompurify';
import * as S from './ProductDetailStyles';
import { newDate } from '../../../../commons/Date';
import { IProductDetailPresenter } from './ProductDetailTypes';
import ProductCommentWriteContainer from '../comment/write/ProductCommentWriteContainer';
import ProductCommentListContainer from '../comment/list/ProductCommentListContainer';
// import ProductCommentListContainer from '../comment/list/ProductCommentListContainer';

export default function ProductDetailPresenter(props: IProductDetailPresenter) {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Inner>
            <S.DetailTilteInner>
              <S.DetailProfileInner>
                <S.DetailProfileBox>
                  <S.ImageBox src="/images/profile.png" alt="profile" />
                </S.DetailProfileBox>
                <S.DetailTitleBox>
                  <S.DetailTitle>
                    {props.data?.fetchUseditem.seller.name}
                  </S.DetailTitle>
                  <S.DetailDate>
                    Date:{newDate(props.data?.fetchUseditem.createdAt as Date)}
                  </S.DetailDate>
                </S.DetailTitleBox>
              </S.DetailProfileInner>
              <S.DetailRightBOx>
                <S.PurchaseButton
                  pos="basket"
                  onClick={props.onClickBasket(props.data?.fetchUseditem)}
                >
                  장바구니
                </S.PurchaseButton>
                <S.PurchaseButton pos="purchase" onClick={props.onClickPayment}>
                  바로구매
                </S.PurchaseButton>
              </S.DetailRightBOx>
            </S.DetailTilteInner>
            <S.DetailContentInner>
              <S.DetailContentTitleBox>
                <S.EmptyBox>
                  {typeof window !== 'undefined' ? (
                    <S.DetailContentRemarks
                      dangerouslySetInnerHTML={{
                        __html: Dompurify.sanitize(
                          props.data?.fetchUseditem.remarks as string
                        ),
                      }}
                    ></S.DetailContentRemarks>
                  ) : (
                    <S.DetailContentRemarks>
                      {props.data?.fetchUseditem.remarks}
                    </S.DetailContentRemarks>
                  )}
                  <S.DetailContentProductName>
                    {props.data?.fetchUseditem.name}
                  </S.DetailContentProductName>
                </S.EmptyBox>
                <S.HartImgeBox onClick={props.onClickPick}>
                  <S.ImageBox src="/images/hart.png" alt="hart" />
                  <S.HartCount>
                    {props.data?.fetchUseditem.pickedCount}
                  </S.HartCount>
                </S.HartImgeBox>
              </S.DetailContentTitleBox>
              <S.Payment>
                {props.data?.fetchUseditem.price.toLocaleString()}원
              </S.Payment>
              <S.ProductImageBox>
                <S.ProductImgBox>
                  {props.data?.fetchUseditem.images
                    ?.filter((el: string) => el)
                    .map((el: string) => (
                      <S.ProductImg
                        key={el}
                        src={`https://storage.googleapis.com/${el}`}
                      />
                    ))}
                </S.ProductImgBox>
              </S.ProductImageBox>
              <S.InforContentBox>
                {typeof window !== 'undefined' ? (
                  <S.InforContent
                    dangerouslySetInnerHTML={{
                      __html: Dompurify.sanitize(
                        props.data?.fetchUseditem.contents as string
                      ),
                    }}
                  ></S.InforContent>
                ) : (
                  <S.InforContent></S.InforContent>
                )}
              </S.InforContentBox>
              <S.HashTagInner>
                {props.data?.fetchUseditem.tags.map((el, i) => (
                  <S.HashTagBox key={i}>
                    <S.HashTag>#{`${el}`}</S.HashTag>
                  </S.HashTagBox>
                ))}
              </S.HashTagInner>
              <S.MapInner>
                <S.MapBox id="newMap"></S.MapBox>
              </S.MapInner>
              <S.ButtonInner>
                <S.ListButton button="list" onClick={props.onClickListMove}>
                  목록으로
                </S.ListButton>
                <S.ListButton button="edit" onClick={props.onClickEditMove}>
                  수정하기
                </S.ListButton>
                <S.ListButton
                  button="edit"
                  onClick={props.onClickProductDelete}
                >
                  삭제하기
                </S.ListButton>
              </S.ButtonInner>
            </S.DetailContentInner>
          </S.Inner>
        </S.Wrapper>
      </S.Container>
      <ProductCommentWriteContainer />
      <ProductCommentListContainer />
    </>
  );
}
