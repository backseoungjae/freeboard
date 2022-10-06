import { atom } from 'recoil';

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: '',
});

export const userInfoState = atom({
  key: 'userInfoState',
  default: {
    email: '',
    name: '',
  },
});

export const isLogin = atom({
  key: 'accessToken',
  default: '',
});

export const newBasketsState = atom({
  key: 'newBaskets',
  default: [],
});
