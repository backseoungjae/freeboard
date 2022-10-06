import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardDetailPresenter from './BoardDetailPresenter';
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from './BoardDetailQueries';

export default function BoardDetailContainer() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const router = useRouter();

  const id = router.query.boardId;

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: id,
    },
  });

  const onClickEditMove = () => {
    router.push(`/boards/${id}/edit`);
  };

  const onClickListMove = () => {
    router.push(`/boards`);
  };

  const onClickDelete = () => {
    deleteBoard({
      variables: {
        boardId: id,
      },
      // refetchQueries: [{ query: FETCH_BOARDS }]
    });
    router.push(`/boards`);
  };

  const onClickLike = () => {
    likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  return (
    <BoardDetailPresenter
      id={id}
      data={data}
      onClickEditMove={onClickEditMove}
      onClickListMove={onClickListMove}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
