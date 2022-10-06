import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '../../../../../styles/theme';

export const Container = styled.div`
  width: 100%;
`;

export const SoldWrapper = styled.div`
  width: 100%;
  border-top: 2px solid #e9e9e9;
  border-bottom: 2px solid #e9e9e9;
`;

export const SoldInner = styled.div``;

export const SoldHeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #e9e9e9;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    display: none;
  }
`;

export const SoldBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #e9e9e9;
  :last-of-type {
    border-bottom: 0;
  }
  &:hover {
    background-color: #e9e9e9;
  }
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    flex-direction: column;
    align-items: initial;
  }
`;

export const SoldHeader = styled.p`
  width: 10%;
  margin: 0;
  font-size: 12px;
  color: #000;
  text-align: center;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const SoldHeaderSeller = styled.p`
  width: 15%;
  margin: 0;
  font-size: 12px;
  color: #000;
  text-align: center;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const SoldHeaderName = styled.p`
  width: 30%;
  margin: 0;
  font-size: 12px;
  color: #000;
  text-align: center;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const SoldHeaderPickCount = styled.p`
  width: 10%;
  margin: 0;
  font-size: 12px;
  color: #000;
  text-align: center;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const SoldHeaderPrice = styled.p`
  width: 20%;
  margin: 0;
  font-size: 12px;
  color: #000;
  text-align: center;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const SoldHeaderBuy = styled.p`
  width: 20%;
  margin: 0;
  font-size: 12px;
  color: #000;
  text-align: center;
  padding: 0 10px;
  box-sizing: border-box;
`;

export const SoldTitleBox = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
  }
`;

export const SoldImageBox = styled.div`
  width: 44%;
  text-align: center;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
  box-sizing: border-box;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 40px;
    padding: 0;
    border-right: 0;
  }
`;

export const SoldImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
  }
`;

export const SubSoldText = styled.b`
  font-size: 12px;
  color: #000;
  text-align: left;
  display: none;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    display: block;
    margin-right: 5px;
  }
`;

export const SoldSeller = styled.p`
  width: 65%;
  margin: 0;
  font-size: 12px;
  color: #000;
  text-align: center;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: calc(100% - 40px);
    border-right: 0;
  }
`;

export const SoldContentBox = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const SoldName = styled.p`
  width: 75%;
  margin: 0;
  font-size: 12px;
  color: #000;
  text-align: center;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 65%;
    padding-left: 0;
    border-right: 0;
  }
`;

export const PickCount = styled.p`
  width: 20%;
  margin: 0;
  font-size: 12px;
  color: #000;
  text-align: center;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 35%;
    padding-left: 0;
    border-right: 0;
  }
`;

export const SoldPriceBox = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const SoldPrice = styled.p`
  width: 100%;
  margin: 0;
  font-size: 12px;
  color: #000;
  text-align: right;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
  box-sizing: border-box;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-right: 0;
    padding-left: 0;
  }
`;

export const Sold = styled.p<{ pos: 'sell' | 'no' }>`
  width: 100%;
  margin: 0;
  font-size: 12px;
  text-align: center;
  padding: 0 10px;
  box-sizing: border-box;
  ${({ pos }) =>
    pos === 'sell'
      ? css`
          color: #ff5360;
        `
      : css`
          color: #000;
        `}
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-right: 0;
    padding-left: 0;
  }
`;
