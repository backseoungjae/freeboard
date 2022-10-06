import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../../../../../styles/theme';

export const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const Inner = styled.div`
  width: 100%;
  padding: 60px 100px 100px;
  box-sizing: border-box;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    padding: 60px 20px 140px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  color: #000000;
`;

export const Box = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    justify-content: initial;
    flex-direction: column;
  }
`;

export const InputBox = styled.div`
  width: 100%;
`;

export const HalfInputBox = styled.div`
  width: 48%;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
    margin-bottom: 30px;
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export const Label = styled.label`
  width: 100px;
  display: inline-block;
  margin: 15px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const Input = styled.input`
  margin: 0;
  position: relative;
  outline: none;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  ::placeholder {
    transition: all 0.3s ease-in-out;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #c4c4c4;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

export const Textarea = styled.textarea`
  position: relative;
  outline: none;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  box-sizing: border-box;
  width: 100%;
  margin: 15px 0;
  height: 480px;
  font-size: 16px;
  line-height: 24px;
  overflow-y: scroll;
  resize: none;
  ::placeholder {
    transition: all 0.3s ease-in-out;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #c4c4c4;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  :last-child {
    margin-bottom: 0;
  }
`;

export const AddressInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const AddressInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  margin-right: 16px;
  font-size: 16px;
  outline: none;
  ::placeholder {
    transition: all 0.3s ease-in-out;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #c4c4c4;
  }
  :focus::placeholder {
    color: transparent;
  }
  :last-child {
    margin-top: 20px;
  }
`;

export const AddressNumberInput = styled.input`
  width: 90px;
  padding: 12px 16px;
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  margin-right: 16px;
  font-size: 16px;
  outline: none;
  ::placeholder {
    transition: all 0.3s ease-in-out;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #c4c4c4;
  }
  :focus::placeholder {
    color: transparent;
  }
  :last-child {
    margin-top: 20px;
  }
`;

export const AddressButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 12px 16px;
  box-sizing: border-box;
  border: 1px solid #000000;
  background: #000000;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
`;

export const PictureBox = styled.div`
  margin: 16px 0 40px;
  display: flex;
  align-items: center;
`;

export const EmptyBox = styled.div``;

export const LdioInputInner = styled.div`
  display: flex;
  align-items: center;
`;

export const LdioInputBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 22px;
`;

export const LdioInput = styled.input`
  margin-right: 14px;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const Button = styled.button<{ button: 'write' | 'cancel' }>`
  cursor: pointer;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding: 14px 60px;
  box-sizing: border-box;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  ${({ button }) =>
    button === 'write'
      ? css`
          color: #000000;
          border: 1px solid #000000;
          :hover {
            border: 1px solid #ff5360;
            background-color: #ff5360;
            color: #ffffff;
          }
        `
      : css`
          color: #ff5360;
          border: 1px solid #ff5360;
          margin-right: 25px;
          :hover {
            border: 1px solid #ff5360;
            background-color: #ff5360;
            color: #ffffff;
          }
        `}
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    width: 50%;
    font-size: 14px;
    padding: 14px 0;
  }
`;

export const KakaoMap = styled.div`
  width: 100%;
  height: 252px;
`;

export const TagsInner = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const TagsBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  :last-child {
    margin-right: 0;
  }
`;

export const frontTag = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  margin: 0;
`;

export const Tags = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  margin: 0;
`;

export const TagsButton = styled.button`
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;
`;
