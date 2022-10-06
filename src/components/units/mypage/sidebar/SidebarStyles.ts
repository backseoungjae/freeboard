import styled from '@emotion/styled';
import theme from '../../../../../styles/theme';

export const Container = styled.div`
  width: 200px;
  border-right: 1px solid #ececec;
  margin-right: 50px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
    border: 0;
    margin-right: 0;
    padding: 0 20px;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    align-items: initial;
  }
`;

export const ProfileImg = styled.img`
  width: 100%;
  border-radius: 50%;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 50px;
    height: 50px;
  }
`;

export const Inner = styled.div`
  margin-bottom: 20px;
`;

export const Profile = styled.p`
  margin: 0;
  color: #000;
  font-size: 20px;
  font-weight: 700;
`;

export const Point = styled.p`
  margin: 0;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;
