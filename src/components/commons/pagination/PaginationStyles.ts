import styled from '@emotion/styled';
import theme from '../../../../styles/theme';
import { IActive } from './PaginationTypes';

// 페이지네이션

export const PaginationInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const PaginationNumberBox = styled.div`
  margin: 0 15px;
  text-align: center;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    margin: 0 10px;
  }
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    margin: 0 5px;
  }
`;

export const PaginationNumber = styled.p`
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #999;
  width: 15px;
  margin: 0;
  transition: all 0.3s ease-in-out;
  :hover {
    color: #ff5360;
  }
  color: ${(props: IActive) => (props.isActive ? '#ff5360' : '#000')};
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    font-size: 12px;
  }
`;

export const PaginationButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;
  color: #999;
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    font-size: 12px;
    margin: 0;
  }
`;

export const ImageBox = styled.img``;
