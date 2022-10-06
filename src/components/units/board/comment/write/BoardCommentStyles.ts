import styled from '@emotion/styled';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import theme from '../../../../../../styles/theme';

export const Container = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 40px 0;
  box-sizing: border-box;
  border-top: 1px solid #bdbdbd;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const CommentIcon = styled.img``;

export const CommentTextBox = styled.div`
  margin-left: 15px;
`;

export const CommentText = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const CommentWriteBox = styled.div`
  margin-right: 25px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    margin: 0;
  }
`;

export const CommentinputBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    flex-direction: column;
    align-items: initial;
  }
`;

export const Commentinput = styled.input`
  border: 1px solid #bdbdbd;
  outline: none;
  padding: 15px 20px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  ::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #828282;
    transition: all 0.3s ease-in-out;
  }
  :focus::placeholder {
    color: transparent;
  }
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const TextareaBox = styled.div`
  width: 100%;
  margin-bottom: 45px;
  border: 1px solid #bdbdbd;
`;

export const InputTextarea = styled.input`
  outline: none;
  border: 0;
  width: 100%;
  height: 130px;
  padding: 20px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  ::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #828282;
    transition: all 0.3s ease-in-out;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

export const CommentBottomBox = styled.div`
  padding: 20px;
  box-sizing: border-box;
  border-top: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Empty = styled.div``;

export const InputLength = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
`;

export const CommentSubmit = styled.button`
  outline: none;
  border: 0;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding: 15px;
  box-sizing: border-box;
  background-color: #000000;
`;

export const Rating = styled(Rate)`
  color: #ff5360;
`;
