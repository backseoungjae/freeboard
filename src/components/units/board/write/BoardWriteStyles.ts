import styled from '@emotion/styled';
import theme from '../../../../../styles/theme';
import { IActive } from './BoardWriteTypes';

export const Container = styled.div`
  padding: 20px;
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

export const Title = styled.div`
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  text-align: center;
  color: #000000;
`;

export const Box = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    justify-content: initial;
    flex-direction: column;
  }
`;

export const InputBox = styled.div`
  width: 100%;
`;

export const HalfInputBox = styled.div`
  width: 48%;
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    width: 100%;
  }
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const Input = styled.input`
  position: relative;
  outline: none;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  box-sizing: border-box;
  width: 100%;
  margin: 15px 0;
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
  width: 100%;
`;

export const AddressInner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const AddressInput = styled.input`
  padding: 12px 16px;
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  margin-right: 16px;
  font-size: 16px;
  outline: none;
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    width: 40%;
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
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    width: 60%;
  }
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

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${(props: IActive) => (props.active ? '#fff' : '#000')};
  padding: 14px 60px;
  box-sizing: border-box;
  border: 0;
  transition: all 0.3s ease-in-out;
  background-color: ${(props: IActive) => (props.active ? '#ff5360' : '')};
`;

export const ErrorEmptyBox = styled.div`
  position: absolute;
  padding-bottom: 10px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ff5360;
`;
