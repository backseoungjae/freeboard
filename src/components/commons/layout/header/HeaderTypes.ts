import { ChangeEvent } from 'react';

export interface IHeaderPresenter {
  data?: {
    fetchUserLoggedIn: {
      _id: string;
      email: string;
      name: string;
      userPoint: {
        amount: number;
      };
    };
  };
  price: string;
  count: number;
  isModalVisible: boolean;
  isOpen: boolean;
  boardListPush: () => void;
  onToggleModal: () => void;
  requestPay: () => void;
  onChangePrice: (e: ChangeEvent<HTMLSelectElement>) => void;
  logOut: () => void;
  signupPush: () => void;
  loginPush: () => void;
  basketMove: () => void;
  handleDropdown: () => void;
}
