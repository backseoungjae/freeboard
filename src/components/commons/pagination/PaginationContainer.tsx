import React, { MouseEvent, useState } from 'react';
import * as S from './PaginationStyles';
import PaginationPresenter from './PaginationPresenter';
import { ApolloQueryResult, OperationVariables } from '@apollo/client';

interface IPaginationContainer {
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  dataMap: { _id: string; title: string; writer: string; createdAt: Date };
  data?: {
    fetchBoards: [
      {
        _id: string;
        writer: string;
        title: string;
        createdAt: Date;
      }
    ];
  };
  dataBoardsCount: {
    fetchBoardsCount: number;
  };
}

export default function PaginationContainer(props: IPaginationContainer) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastPage = Math.ceil(
    Number(props.dataBoardsCount?.fetchBoardsCount) / 10
  );

  const [activePage, setActivePage] = useState<number>(1);

  const onClickPage = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof Element)) {
      return;
    }
    const activePage = Number(e.currentTarget.id);
    setActivePage(activePage);
    props.refetch({
      page: activePage,
    });
  };

  const onClickPrev = () => {
    if (currentPage <= 1) {
      return;
    }
    setCurrentPage((prev) => prev - 10);
    setActivePage(currentPage - 10);
    props.refetch({
      page: currentPage - 10,
    });
  };

  const onClickNext = () => {
    if (currentPage + 10 > lastPage) {
      return;
    }
    setCurrentPage((prev) => prev + 10);
    setActivePage(currentPage + 10);
    props.refetch({
      page: currentPage + 10,
    });
  };

  const renderPageNumbers = props.data?.fetchBoards.map((_: any, i: number) => {
    return (
      i + currentPage <= lastPage && (
        <S.PaginationNumberBox
          key={i + currentPage}
          id={String(i + currentPage)}
          onClick={onClickPage}
        >
          <S.PaginationNumber isActive={currentPage + i === activePage}>
            {i + currentPage}
          </S.PaginationNumber>
        </S.PaginationNumberBox>
      )
    );
  });

  return (
    <PaginationPresenter
      renderPageNumbers={renderPageNumbers}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
    />
  );
}
