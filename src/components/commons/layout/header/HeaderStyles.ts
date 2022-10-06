import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../../../../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 20px;
  box-sizing: border-box;
  background-color: transparent;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 100px;
  height: 50px;
  cursor: pointer;

  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 80px;
    height: 40px;
  }
`;

export const InnerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileInner = styled.div`
  position: relative;
  margin: 0 20px 0 0;
`;

export const ProfileBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const ProfileArrow = styled.img<{ isActive?: boolean }>`
  transition: all 0.3s ease-in-out;
  transform: ${({ isActive }) =>
    isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const DropBox = styled.div<{ isActive?: boolean }>`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  top: ${({ isActive }) => (isActive ? '50px' : '100px')};
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  width: 180px;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
`;

export const DropTextBox = styled.div`
  padding: 0 0 10px 0;
  box-sizing: border-box;
  :last-of-type {
    padding: 0;
  }
`;

export const DropText = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0;
`;

export const LoginButton = styled.button<{ login: 'login' | 'signup' }>`
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  border-radius: 22px;
  border: solid 1px #ff5360;
  background-color: #ff5360;
  padding: 10px 15px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  ${({ login }) =>
    login === 'login'
      ? css`
          &:hover {
            color: #000;
            border: solid 1px #dfdfdf;
            background-color: #fff;
          }
        `
      : css`
          color: #000;
          border-radius: 22px;
          border: solid 1px #dfdfdf;
          background-color: #fff;
          margin: 0 20px 0 0;
          &:hover {
            color: #fff;
            border: solid 1px #ff5360;
            background-color: #ff5360;
          }
        `}
`;

export const LoginOutButton = styled.button`
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  background-color: transparent;
  border: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff5360;
  }
`;

export const LoginName = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin: 0;
  margin-right: 10px;
`;

// 장바구니

export const BusketInner = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: 0;
  padding: 0;
  margin-right: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff5360;
  }
`;

export const BusketBox = styled.div`
  background: #ff5360;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BusketText = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 12px;
  margin: 0;
`;

export const LoginText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  margin: 0;
`;

// 충전하기 버튼

export const ChargeButton = styled.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  padding: 0;
  font-weight: 500;
  font-size: 14px;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff5360;
  }
`;

export const PaymentWrapper = styled.div``;

export const ChargeTitle = styled.p`
  margin: 40px 0;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

export const SelectInner = styled.select`
  margin-bottom: 40px;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #000000;
  padding: 15px;
  box-sizing: border-box;
  outline: none;
`;

export const Option = styled.option`
  width: 100%;
`;

export const NonButton = styled.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #fff;
  background: #bdbdbd;
  border-radius: 10px;
  width: 100%;
  text-align: center;
  padding: 20px;
`;

export const ResultButton = styled.button`
  cursor: pointer;
  border: 0;
  outline: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #fff;
  background: #ff5360;
  border-radius: 10px;
  width: 100%;
  text-align: center;
  padding: 20px;
`;
