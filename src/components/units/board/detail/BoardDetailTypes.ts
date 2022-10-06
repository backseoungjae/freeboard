import { MouseEvent } from 'react';

export interface IBoardDetail {
  data?: {
    fetchBoard: {
      _id: string;
      title: string;
      writer: string;
      contents: string;
      createdAt: Date;
      youtubeUrl: string;
      likeCount: number;
      dislikeCount: number;
      images: string[];
      boardAddress: {
        zipcode: string;
        address: string;
        addressDetail: string;
      };
    };
  };
  id: string | string[] | undefined;
  onClickDelete: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickListMove: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickEditMove: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickLike: () => void;
  onClickDislike: () => void;
}
