import React from 'react';
import * as S from './ProductCommentListStyles';
import InfiniteScroll from 'react-infinite-scroller';

interface IProductCommentListPresenter {
  dataListMap?: {
    _id: string;
    user: { name: string };
    createdAt: Date;
    contents: string;
  };
  onLoadMore: () => void;
}

export default function ProductCommentListPresenter(
  props: IProductCommentListPresenter
) {
  return (
    <S.Wrapper>
      <S.CommentsListInner>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.dataListMap || ''}
        </InfiniteScroll>
      </S.CommentsListInner>
    </S.Wrapper>
  );
}
