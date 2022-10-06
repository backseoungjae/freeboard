import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../../../../../styles/theme';

export const Container = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
`;

export const Inner = styled.div`
  width: 100%;
  padding: 60px 100px 100px;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    padding: 60px 20px 100px;
  }
`;

export const DetailTilteInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #bdbdbd;
`;

export const DetailProfileInner = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    align-items: initial;
    flex-direction: column;
  }
`;

export const ImageBox = styled.img`
  border-radius: 50%;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 50px;
    height: 50px;
  }
`;

export const DetailProfileBox = styled.div`
  margin-right: 16px;
`;

export const DetailTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    margin-top: 10px;
  }
`;

export const DetailTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    font-size: 14px;
  }
`;

export const DetailDate = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #828282;
`;

export const DetailRightBOx = styled.div`
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
  }
`;

export const PurchaseButton = styled.button<{ pos: 'purchase' | 'basket' }>`
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding: 14px 60px;
  box-sizing: border-box;
  outline: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  ${({ pos }) =>
    pos === 'purchase'
      ? css`
          color: #ff5360;
          border: 1px solid #ff5360;
          :hover {
            color: #ffffff;
            background-color: #ff5360;
          }
        `
      : css`
          color: #4f4f4f;
          border: 1px solid #000000;
          margin-right: 10px;
          :hover {
            color: #ffffff;
            background-color: #000000;
          }
        `}

  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    font-size: 12px;
    padding: 14px 0;
    width: 100%;
    margin-right: 0;
    :last-child {
      margin-top: 10px;
    }
  }
`;

export const DetailContentInner = styled.div`
  margin-top: 20px;
`;

export const DetailContentTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EmptyBox = styled.div``;

export const DetailContentRemarks = styled.p`
  margin-bottom: 20px;
  color: #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  line-height: 27px;
  > P {
    margin: 0;
  }
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    font-size: 14px;
  }
`;

export const DetailContentProductName = styled.p`
  margin: 0;
  color: #4f4f4f;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    font-size: 18px;
  }
`;

export const HartImgeBox = styled.div`
  cursor: pointer;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    margin-left: 10px;
    > img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const HartCount = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    font-size: 14px;
  }
`;

export const Payment = styled.p`
  margin: 0;
  margin-top: 20px;
  font-weight: 700;
  font-size: 36px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    margin-top: 10px;
    font-size: 20px;
  }
`;

export const ProductImageBox = styled.div`
  margin: 120px 0 80px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    margin: 60px 0;
  }
`;

export const ProductImgBox = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ProductImg = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 33%;
  }
`;

export const InforContentBox = styled.div`
  margin-bottom: 40px;
`;

export const InforContent = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  > p > img {
    width: 100%;
    height: fit-content;
  }
`;

export const HashTagInner = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const HashTagBox = styled.div`
  border-radius: 15px;
  background: #ff5360;
  padding: 8px 15px;
  box-sizing: border-box;
  margin-right: 10px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    padding: 6px 10px;
  }
`;

export const HashTag = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    font-size: 14px;
  }
`;

export const MapInner = styled.div`
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  padding: 80px 0;
  box-sizing: border-box;
`;

export const MapBox = styled.div`
  width: 100%;
  height: 360px;
`;

export const ButtonInner = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListButton = styled.button<{ button: 'list' | 'edit' }>`
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding: 14px 60px;
  box-sizing: border-box;
  outline: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  ${({ button }) =>
    button === 'list'
      ? css`
          color: #4f4f4f;
          border: 1px solid #000000;
          :hover {
            color: #ffffff;
            background-color: #000000;
          }
        `
      : css`
          color: #ff5360;
          border: 1px solid #ff5360;
          margin-left: 5px;
          :hover {
            color: #ffffff;
            background-color: #ff5360;
          }
        `}
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 33%;
    font-size: 14px;
    padding: 14px 0;
  }
`;
