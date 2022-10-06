import { MouseEvent } from 'react';

export interface IBasketPresenter {
  baskets: {
    _id: string;
    createdAt: Date;
    name: string;
    images: string;
    remarks: string;
    tags: string[];
    seller: {
      name: string;
    };
  }[];

  productDetailMove: (e: MouseEvent<HTMLDivElement>) => void;
}
