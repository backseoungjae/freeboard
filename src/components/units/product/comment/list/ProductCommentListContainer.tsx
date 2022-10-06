import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { newDate } from '../../../../../commons/Date';
import {
  DELETE_PRODUCT_COMMENT,
  FETCH_USEDITEM_QUESTIONS,
  UPDATE_COMMENT,
} from './ProductCommentListQuery';
import * as S from './ProductCommentListStyles';
import ProductCommentListPresenter from './ProductCommentListPresenter';

export default function ProductCommentListContainer() {
  const router = useRouter();
  const [edit, setEdit] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [deleteComment] = useMutation(DELETE_PRODUCT_COMMENT);

  const id = router.query.productId;

  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: id,
    },
  });

  // 수정 API
  const [commentUpdate] = useMutation(UPDATE_COMMENT);

  // 댓글 수정 버튼 => 클릭 시 input창 생성
  const onClickUpdate = (e: MouseEvent<HTMLImageElement>) => {
    setEdit(edit === '' ? (e.currentTarget as Element).id : '');
  };

  // 댓글 취소
  const onClickCancle = (e: MouseEvent<HTMLButtonElement>) => {
    setEdit(edit === '' ? (e.currentTarget as Element).id : '');
  };

  const onChangeComments = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  // 댓글 삭제
  const onClickDelete = async (e: MouseEvent<HTMLDivElement>) => {
    try {
      await deleteComment({
        variables: {
          useditemQuestionId: (e.currentTarget as Element).id,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: {
              useditemId: id,
            },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  // 댓글 수정
  const onClickModify = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      await commentUpdate({
        variables: {
          useditemQuestionId: (e.target as Element).id,
          updateUseditemQuestionInput: {
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: {
              useditemId: id,
            },
          },
        ],
      });
      setEdit('');
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  // 댓글 무한 스크롤 코드
  const onLoadMore = () => {
    if (!data) {
      return;
    }

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions) {
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };
        }
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  const dataListMap = data?.fetchUseditemQuestions.map(
    (el: {
      _id: string;
      user: { name: string };
      createdAt: Date;
      contents: string;
    }) => (
      <S.CommentsListContainer key={el._id}>
        <S.CommentsListBox>
          <S.CommentsListProfileBox>
            <S.CommentsListProfileImg src="/images/profile.png" />
            <S.CommentsListProfile>
              <S.CommentsListProfileText>
                {el.user.name}
              </S.CommentsListProfileText>
              <S.CommentsListProfileTime>
                {newDate(el.createdAt)}
              </S.CommentsListProfileTime>
            </S.CommentsListProfile>
          </S.CommentsListProfileBox>
          <S.EditBox>
            <S.EditImag
              onClick={onClickUpdate}
              id={el._id}
              src="/images/Modify.png"
            />
            <S.EditImag
              onClick={onClickDelete}
              id={el._id}
              src="/images/delete.png"
            />
          </S.EditBox>
        </S.CommentsListBox>
        <S.CommentsListContents>
          {el._id === edit ? (
            <S.CommentEditTextarea
              id={el._id}
              defaultValue={el.contents}
              onChange={onChangeComments}
            ></S.CommentEditTextarea>
          ) : (
            <S.CommentsListContents>{el.contents}</S.CommentsListContents>
          )}
        </S.CommentsListContents>
        {el._id === edit ? (
          <S.ModifyBox>
            <S.ModifyButton pos="modify" id={el._id} onClick={onClickModify}>
              수정
            </S.ModifyButton>
            <S.ModifyButton pos="cancel" onClick={onClickCancle}>
              취소
            </S.ModifyButton>
          </S.ModifyBox>
        ) : (
          ''
        )}
      </S.CommentsListContainer>
    )
  );

  return (
    <ProductCommentListPresenter
      onLoadMore={onLoadMore}
      dataListMap={dataListMap}
    />
  );
}
