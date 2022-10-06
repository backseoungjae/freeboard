import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../../../../../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    padding: 0 20px 100px;
    box-sizing: border-box;
  }
`;

export const CommentsListContainer = styled.div`
  padding-top: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #000000;
`;

export const EditBox = styled.div`
  display: flex;
  align-items: center;
`;

export const EditImag = styled.img`
  cursor: pointer;
  margin-right: 15px;
`;

export const CommentEditTextarea = styled.textarea`
  outline: none;
  width: 100%;
  height: 100px;
  resize: none;
  background: #ffffff;
  border: 1px solid #000000;
  padding: 10px;
  box-sizing: border-box;
`;

export const CommentsListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CommentsListProfileBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentsListProfileImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 50%;
`;

export const CommentsListProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommentsListProfileText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin: 0;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    font-size: 14px;
  }
`;

export const CommentsListProfileTime = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    font-size: 12px;
  }
`;

export const CommentsListContents = styled.div`
  margin: 0;
  width: 100%;
  border: 0;
  padding: 10px;
  box-sizing: border-box;
  font-size: 16px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    font-size: 14px;
  }
`;

export const ModifyBox = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    margin: 10px 0;
    padding: 0 10px;
    box-sizing: border-box;
  }
`;

export const ModifyButton = styled.button<{ pos: 'modify' | 'cancel' }>`
  cursor: pointer;
  border: 0;
  font-weight: 700;
  font-size: 16px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 0;
  ${({ pos }) =>
    pos === 'modify'
      ? css`
          border: 1px solid #ff5360;
          background: #ff5360;
          color: #fff;
          margin-right: 10px;
        `
      : css`
          border: 1px solid #000000;
          background: #ffffff;
          color: #000;
        `}

  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    font-size: 14px;
    padding: 10px;
  }
`;

export const CommentsListInner = styled.div`
  height: 500px;
  overflow-y: scroll;
`;

export const CommentInquiryImg = styled.img`
  cursor: pointer;
`;
