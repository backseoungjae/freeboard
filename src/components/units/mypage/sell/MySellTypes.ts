import { ApolloQueryResult, OperationVariables } from '@apollo/client';
import { MouseEvent } from 'react';

export interface IMySellPresenter {
  soldItems: {
    fetchUseditemsISold: [
      {
        _id: string;
        buyer: {
          _id: string;
          name: string;
        };
        name: string;
        contents: string;
        price: number;
        images: string;
        soldAt: Date;
      }
    ];
  };
  soldItemsCount: {
    fetchUseditemsCountISold: number;
  };
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  productDetailMove: (e: MouseEvent<HTMLDivElement>) => void;
}
