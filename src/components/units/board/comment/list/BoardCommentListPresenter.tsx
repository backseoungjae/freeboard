import React from 'react';
import { newDate } from '../../../../../commons/Date';
import * as S from './BoardCommentListStyles';
import { ICommentList } from './BoardCommentListTypes';
import InfiniteScroll from 'react-infinite-scroller';

export default function BoardCommentListPresenter(props: ICommentList) {
  const renderData = props.data?.fetchBoardComments.map((el) => {
    return (
      <S.Container key={el._id}>
        <S.Wrapper>
          <S.Inner>
            <S.CommentListProfileBox>
              <S.CommentListProfile src="/images/profile.png" alt="profile" />
            </S.CommentListProfileBox>
            <S.SubWrapper>
              <S.InnerBox>
                <S.TitleBox>
                  <S.WriterBox>
                    <S.Writer>{el.writer}</S.Writer>
                  </S.WriterBox>
                  {el._id === props.edit ? (
                    <S.Rating
                      onChange={props.rateChange}
                      defaultValue={el.rating}
                    />
                  ) : (
                    <S.Rating value={el.rating} disabled />
                  )}
                </S.TitleBox>
                <S.ContentBox>
                  {el._id === props.edit ? (
                    <S.ContentInput
                      maxLength={100}
                      defaultValue={el.contents}
                      onChange={props.onChangeContents}
                    ></S.ContentInput>
                  ) : (
                    <S.Content>{el.contents}</S.Content>
                  )}
                  {el._id === props.edit ? (
                    <S.ModifyBox>
                      <S.ModifyButton id={el._id} onClick={props.onClickModify}>
                        수정
                      </S.ModifyButton>
                      <S.CancleButton onClick={props.onClickCancle}>
                        취소
                      </S.CancleButton>
                    </S.ModifyBox>
                  ) : (
                    ''
                  )}
                </S.ContentBox>
                {el._id === props.edit && (
                  <S.Empty>
                    <S.InputLength>{props.contents.length}/100</S.InputLength>
                  </S.Empty>
                )}
                <S.AddDateBox>
                  <S.AddDate>{newDate(el.createdAt)}</S.AddDate>
                </S.AddDateBox>
              </S.InnerBox>
              <S.IconBox>
                <S.UpdateIconBox id={el._id} onClick={props.onClickUpdate}>
                  <S.UpdateIcon src="/images/Modify.png" alt="Modify" />
                </S.UpdateIconBox>
                <S.DelteIconBox id={el._id} onClick={props.onClickDelete}>
                  <S.UpdateIcon src="/images/delete.png" alt="delete" />
                </S.DelteIconBox>
              </S.IconBox>
            </S.SubWrapper>
          </S.Inner>
        </S.Wrapper>
      </S.Container>
    );
  });

  return (
    <S.Container>
      <S.ScrollWrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {renderData || ''}
        </InfiniteScroll>
      </S.ScrollWrapper>
    </S.Container>
  );
}
