import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import BoardWriteContainer from '../../../../src/components/units/board/write/BoardWriteContainer';
import { FETCH_BOARD } from '../../../../src/components/units/board/detail/BoardDetailQueries';

export default function index() {
  const router = useRouter();

  // boardId => id로 변환
  const id = router.query.boardId;

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: id,
    },
  });

  console.log(data);

  return <BoardWriteContainer isEdit={true} data={data} />;
}
