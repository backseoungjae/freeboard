import { MouseEvent } from 'react';

export interface IMyPickPresenter {
  pickList: {
    fetchUseditemsIPicked: [
      {
        _id: string;
        name: string;
        contents: string;
        price: number;
        images: string;
        pickedCount: number;
        buyer: {
          _id: string;
          name: string;
        };
        seller: {
          _id: string;
          name: string;
        };
      }
    ];
  };
  pickListCount: {
    fetchUseditemsCountIPicked: number;
  };
  refetch: any;
  productDetailMove: (e: MouseEvent<HTMLDivElement>) => void;
}
