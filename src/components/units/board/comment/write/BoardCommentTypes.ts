import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface IComment {
  writer: string;
  password: string;
  contents: string;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  onChangeComment: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickComment: () => void;
}
