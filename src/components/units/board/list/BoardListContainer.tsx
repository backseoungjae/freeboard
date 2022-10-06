import React, { MouseEvent, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardListQueries';
import BoardListPresenter from './BoardListPresenter';
import { newHour } from '../../../../commons/Date';
import * as S from './BoardListStyles';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export default function BoardListContainer() {
  const router = useRouter();

  const { data, refetch } = useQuery(FETCH_BOARDS);

  // pagination useQuery
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);

  // Search Keyword
  const [keyword, setKeyword] = useState<string>('');

  const onClickMoveNew = () => {
    router.push(`/boards/new`);
  };

  const onClickMoveDetail = (e: MouseEvent<HTMLDivElement>) => {
    // event 버블링
    router.push(`/boards/${e.currentTarget.id}`);
  };

  const getDebounce = _.debounce((e) => {
    refetch({
      search: e.target.value,
      page: 1,
    });
    refetchBoardsCount({
      search: e.target.value,
    });
    setKeyword(e.target.value);
  }, 300);

  const dataMap = data?.fetchBoards.map(
    (el: { _id: string; title: string; writer: string; createdAt: Date }) => {
      return (
        <S.BodyColl key={el._id} id={el._id} onClick={onClickMoveDetail}>
          <S.BodyBox>
            <S.BodyId>
              <S.HideText>아이디</S.HideText>
              <S.BodyText text="text">
                {el._id.slice(-4).toUpperCase()}
              </S.BodyText>
            </S.BodyId>
            <S.BodyTitle>
              <S.HideText>제목</S.HideText>
              <S.BodyTitleText>
                {el.title
                  .replaceAll(keyword, `!@#${keyword}!@#`)
                  .split('!@#')
                  .map((el) => (
                    <S.SearchWord key={uuidv4()} isMatched={keyword === el}>
                      {el}
                    </S.SearchWord>
                  ))}
              </S.BodyTitleText>
            </S.BodyTitle>
          </S.BodyBox>
          <S.BodyBox>
            <S.BodyWriter>
              <S.HideText>작성자</S.HideText>
              <S.BodyText text="text">{el.writer}</S.BodyText>
            </S.BodyWriter>
            <S.BodyDate>
              <S.HideText>날짜</S.HideText>
              <S.BodyText text="date">{newHour(el.createdAt)}</S.BodyText>
            </S.BodyDate>
          </S.BodyBox>
        </S.BodyColl>
      );
    }
  );

  return (
    <BoardListPresenter
      data={data}
      dataMap={dataMap}
      refetch={refetch}
      dataBoardsCount={dataBoardsCount}
      getDebounce={getDebounce}
      onClickMoveNew={onClickMoveNew}
      onClickMoveDetail={onClickMoveDetail}
    />
  );
}
