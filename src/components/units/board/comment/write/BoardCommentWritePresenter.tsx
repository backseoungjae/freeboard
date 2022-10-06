import React from 'react';
import * as S from './BoardCommentStyles';
import { IComment } from './BoardCommentTypes';

export default function BoardCommentWritePresenter(props: IComment) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Comment>
          <S.CommentIcon src="/images/comment.png" alt="comment" />
          <S.CommentTextBox>
            <S.CommentText>댓글</S.CommentText>
          </S.CommentTextBox>
        </S.Comment>
        <S.CommentinputBox>
          <S.CommentWriteBox>
            <S.Commentinput
              type="text"
              placeholder="작성자"
              onChange={props.onChangeComment}
              name={props.writer}
              value={props.writer}
            />
          </S.CommentWriteBox>
          <S.CommentWriteBox>
            <S.Commentinput
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangeComment}
              name={props.password}
              value={props.password}
            />
          </S.CommentWriteBox>
          <S.Rating onChange={props.setRating} value={props.rating} />
        </S.CommentinputBox>
        <S.TextareaBox>
          <S.InputTextarea
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            maxLength={100}
            onChange={props.onChangeComment}
            name={props.contents}
            value={props.contents}
          />
          <S.CommentBottomBox>
            <S.Empty>
              <S.InputLength>{props.contents.length}/100</S.InputLength>
            </S.Empty>
            <S.Empty>
              <S.CommentSubmit onClick={props.onClickComment}>
                등록하기
              </S.CommentSubmit>
            </S.Empty>
          </S.CommentBottomBox>
        </S.TextareaBox>
      </S.Wrapper>
    </S.Container>
  );
}
