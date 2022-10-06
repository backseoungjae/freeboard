import styled from '@emotion/styled';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import theme from '../../../../../../styles/theme';

export const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid #bdbdbd;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    max-width: 100%;
  }
`;

export const Inner = styled.div`
  display: flex;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    flex-direction: column;
  }
`;

export const CommentListProfileBox = styled.div`
  margin-right: 20px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    margin: 0 0 20px 0;
  }
`;

export const CommentListProfile = styled.img`
  border-radius: 50%;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 50px;
    height: 50px;
  }
`;

export const SubWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InnerBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const WriterBox = styled.div`
  margin-right: 20px;
`;

export const Writer = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
`;

export const Rating = styled(Rate)`
  color: #ff5360;
`;

export const ContentBox = styled.div`
  width: 100%;
  word-break: break-all;
  display: flex;
  margin-bottom: 20px;
`;

export const Content = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
`;

export const ContentInput = styled.input`
  width: 80%;
  outline: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
`;

export const Empty = styled.div``;

export const InputLength = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
`;

export const ModifyBox = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export const ModifyButton = styled.button`
  cursor: pointer;
  border: 0;
  font-weight: 400;
  font-size: 16px;
  padding: 10px;
  box-sizing: border-box;
  background-color: transparent;
  margin-right: 10px;
  border: 1px solid #bdbdbd;
  transition: all 0.3s ease-in-out;
  :hover {
    border: 1px solid #ff5360;
    background-color: #ff5360;
    color: #ffffff;
  }
`;

export const CancleButton = styled.button`
  cursor: pointer;
  border: 0;
  font-weight: 400;
  font-size: 16px;
  padding: 10px;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid #bdbdbd;
  transition: all 0.3s ease-in-out;
  :hover {
    border: 1px solid #ff5360;
    background-color: #ff5360;
    color: #ffffff;
  }
`;

export const AddDateBox = styled.div``;

export const AddDate = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #bdbdbd;
`;

export const IconBox = styled.div`
  display: flex;
`;

export const UpdateIcon = styled.img``;

export const UpdateIconBox = styled.div`
  cursor: pointer;
  margin-right: 10px;
`;

export const DelteIconBox = styled.div`
  cursor: pointer;
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 500px;
  overflow-y: auto;
`;
