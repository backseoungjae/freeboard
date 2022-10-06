import styled from '@emotion/styled';
import ReactPlayer from 'react-player';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
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
    padding: 60px 20px;
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
`;
export const DetailProfileBox = styled.div`
  margin-right: 16px;
`;

export const DetailTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const DetailDate = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    font-size: 14px;
    line-height: 12px;
  }
`;

export const DetailContentInner = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DetailContentTitle = styled.div`
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  color: #000000;
`;

export const DetailContentFile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    height: 300px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 480px;
  margin-bottom: 30px;
  :last-child {
    margin-bottom: 0;
  }
`;

export const DetailContent = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

export const DetailContentText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #000000;
`;

export const DetailContentYoutubeBox = styled.div`
  width: 486px;
  height: 240px;
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.2));
  margin-bottom: 50px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
  }
`;

export const YoutubeBox = styled(ReactPlayer)`
  width: 100%;
  height: 100%;
`;

export const DetailContentLikeInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageBox = styled.img`
  border-radius: 50%;
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    width: 50px;
    height: 50px;
  }
`;

export const DetailContentLikeBox = styled.div`
  margin-right: 40px;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export const DetailContentDisLikeBox = styled.div`
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export const LikeBox = styled.div`
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ff5360;
  margin-bottom: 10px;
`;

export const DisLikeBox = styled.div`
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #828282;
  margin-bottom: 10px;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #ff5360;
  margin: 0px 20px;
  cursor: pointer;
`;

export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
  margin: 0px 20px;
  cursor: pointer;
`;

export const LikeCount = styled.div`
  font-size: 16px;
  color: #ff5360;
`;

export const DislikeCount = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  padding: 14px 60px;
  box-sizing: border-box;
  border: 0;
  background-color: transparent;
  border: 1px solid #bdbdbd;
  transition: all 0.3s ease-in-out;
  :hover {
    border: 1px solid #ff5360;
    background-color: #ff5360;
    color: #ffffff;
  }
  :last-child {
    margin-left: 24px;
  }
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    width: 50%;
    font-size: 14px;
    padding: 14px 0;
    :last-child {
      margin-left: 10px;
    }
  }
`;

export const DelButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const DelButton = styled.button`
  cursor: pointer;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  padding: 14px 60px;
  box-sizing: border-box;
  border: 0;
  background-color: transparent;
  border: 1px solid #bdbdbd;
  transition: all 0.3s ease-in-out;
  :hover {
    border: 1px solid #ff5360;
    background-color: #ff5360;
    color: #ffffff;
  }
`;
