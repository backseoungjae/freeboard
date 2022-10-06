import { ChangeEvent } from 'react';

export interface ISignup {
  isName: boolean;
  isEmail: boolean;
  isPassword: boolean;
  isPasswordConfirm: boolean;
  nameMessage: string;
  emailMessage: string;
  passwordMessage: string;
  passwordConfirmMessage: string;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChageEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChagePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChagePasswordConfirm: (e: ChangeEvent<HTMLInputElement>) => void;
  signupSubmit: () => void;
}
