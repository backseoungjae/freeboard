import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { ChangeEvent, useState } from 'react';
import { FETCH_BOARD_COMMENTS } from '../list/BoardCommentListQueries';
import { CREATE_BOARD_COMMENT } from './BoardCommentQueries';
import BoardCommentWritePresenter from './BoardCommentWritePresenter';

export default function BoardCommentWriteContainer() {
  const [writer, setWriter] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [contents, setContents] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  // 등록 API
  const [commentBoard] = useMutation(CREATE_BOARD_COMMENT);

  const router = useRouter();
  // boardComment 확인 ID
  const id = router.query.boardId;

  const onChangeComment = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === writer) {
      setWriter(value);
    } else if (name === password) {
      setPassword(value);
    } else if (name === contents) {
      setContents(value);
    }
  };

  const onClickComment = async () => {
    try {
      await commentBoard({
        variables: {
          boardId: id,
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
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
      setWriter('');
      setContents('');
      setPassword('');
      setRating(0);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <BoardCommentWritePresenter
      onChangeComment={onChangeComment}
      onClickComment={onClickComment}
      setRating={setRating}
      contents={contents}
      writer={writer}
      password={password}
      rating={rating}
    />
  );
}
