import { ApolloQueryResult, OperationVariables } from '@apollo/client';
import React, { MouseEvent, useState } from 'react';
import PaginationPresenter from './PaginationPresenter';
import * as S from './PaginationStyles';

export interface IMyPickPaginationContainer {
  pickList: {
    fetchUseditemsIPicked: [
      {
        _id: string;
        name: string;
        price: number;
        images: string;
        pickedCount: number;
        buyer: {
          _id: string;
        };
        seller: {
          _id: string;
          name: string;
        };
      }
    ];
  };
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  pickListCount: {
    fetchUseditemsCountIPicked: number;
  };
}

export default function MyPickPaginationContainer(
  props: IMyPickPaginationContainer
) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastPage = Math.ceil(
    Number(props.pickListCount?.fetchUseditemsCountIPicked) / 10
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

  const renderPageNumbers = props.pickList?.fetchUseditemsIPicked.map(
    (_: any, i: number) => {
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
    }
  );

  return (
    <PaginationPresenter
      renderPageNumbers={renderPageNumbers}
      onClickNext={onClickNext}
      onClickPrev={onClickPrev}
    />
  );
}
