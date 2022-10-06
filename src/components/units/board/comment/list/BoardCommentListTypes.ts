import { MouseEvent, ChangeEvent } from 'react';

// Container
export interface IMyvariables {
  boardCommentId: string;
  password: string | null;
  updateBoardCommentInput: {
    contents: string;
    rating: number;
  };
}

// Presenter
export interface ICommentList {
  data?: {
    fetchBoardComments: [
      {
        _id: string;
        writer: string;
        contents: string;
        createdAt: Date;
        rating: number;
      }
    ];
  };
  edit: string;
  rates: number;
  contents: string;
  onLoadMore: () => void;
  rateChange: (value: number) => void;
  onClickDelete: (e: MouseEvent<HTMLImageElement>) => void;
  onClickModify: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate: (e: MouseEvent<HTMLDivElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCancle: (e: MouseEvent<HTMLButtonElement>) => void;
}
