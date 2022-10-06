import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { ChangeEvent, MouseEvent, useState } from 'react';
import BoardCommentListPresenter from './BoardCommentListPresenter';
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from './BoardCommentListQueries';
import { IMyvariables } from './BoardCommentListTypes';

export default function BoardCommentListContainer() {
  const router = useRouter();
  const id = router.query.boardId;

  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: id,
    },
  });

  // 삭제 API
  const [deleteComment] = useMutation(DELETE_BOARD_COMMENT);

  // 수정 API
  const [commentUpdate] = useMutation(UPDATE_BOARD_COMMENT);

  const [edit, setEdit] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [rates, setRates] = useState<number>(0);

  const onClickDelete = async (e: MouseEvent<HTMLDivElement>) => {
    const password = prompt('수정 비밀번호 입력쿠...');
    try {
      await deleteComment({
        variables: {
          password,
          boardCommentId: (e.currentTarget as Element).id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: id,
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

  const rateChange = (value: number) => {
    setRates(value);
  };

  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const onClickUpdate = (e: MouseEvent<HTMLDivElement>) => {
    // edit 처음 클릭 시 값이 없으면 currentTarget을 주고,  값이 있으면 빈값을 줘라?? 의미??
    setEdit(edit === '' ? (e.currentTarget as Element).id : '');
  };

  const onClickCancle = (e: MouseEvent<HTMLButtonElement>) => {
    // edit 처음 클릭 시 값이 없으면 currentTarget을 주고,  값이 있으면 빈값을 줘라?? 의미??
    setEdit(edit === '' ? (e.currentTarget as Element).id : '');
  };

  const onClickModify = async (e: MouseEvent<HTMLButtonElement>) => {
    const password = prompt('수정완료 비밀번호 입력쿠...');
    const myvariables: IMyvariables = {
      boardCommentId: (e.target as Element).id,
      password,
      updateBoardCommentInput: { contents, rating: rates },
    };
    if (contents !== '') {
      myvariables.updateBoardCommentInput.contents = contents;
    }
    if (rates !== 0) {
      myvariables.updateBoardCommentInput.rating = rates;
    }

    try {
      await commentUpdate({
        variables: myvariables,
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: id,
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

  const onLoadMore = () => {
    if (!data) {
      return;
    }

    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments) {
          return {
            fetchBoardComments: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentListPresenter
      data={data}
      edit={edit}
      rates={rates}
      contents={contents}
      onClickDelete={onClickDelete}
      onClickUpdate={onClickUpdate}
      rateChange={rateChange}
      onClickModify={onClickModify}
      onChangeContents={onChangeContents}
      onClickCancle={onClickCancle}
      onLoadMore={onLoadMore}
    />
  );
}
