import styled from '@emotion/styled';
import theme from '../../../../styles/theme';
import { IActive } from './MypageTypes';

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    flex-direction: column;
  }
`;

export const Inner = styled.div`
  width: calc(100% - 200px);
  padding: 0 20px;
  box-sizing: border-box;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    margin-top: 30px;
    width: 100%;
  }
`;

// tab button
export const TabInner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    margin-bottom: 20px;
  }
`;

export const TabButton = styled.button`
  cursor: pointer;
  border: 0;
  background-color: transparent;
  padding: 0;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ff5360;
  }
  :first-of-type {
    margin-right: 15px;
  }
  color: ${(props: IActive) => (props.isActive ? '#ff5360' : '#000')};
`;
