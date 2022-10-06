import { ChangeEvent } from 'react';

export interface ILoginPresenterProps {
  onChangeLogin: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
}
