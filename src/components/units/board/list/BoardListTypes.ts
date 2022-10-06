import { ApolloQueryResult, OperationVariables } from '@apollo/client';
import { MouseEvent } from 'react';

export interface IBardList {
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
  dataMap: { _id: string; title: string; writer: string; createdAt: Date };
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  dataBoardsCount: {
    fetchBoardsCount: number;
  };
  getDebounce: any;
  onClickMoveNew: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveDetail: (e: MouseEvent<HTMLDivElement>) => void;
}
