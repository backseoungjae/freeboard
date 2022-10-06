import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../../../../../styles/theme';

export const Container = styled.div`
  width: 100%;
  padding: 0 30px 20px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
`;

export const Inner = styled.div`
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const ListTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
`;

// 게시판 목록 헤더

export const HearderColl = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-top: 2px solid #e9e9e9;
  border-bottom: 2px solid #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    display: none;
  }
`;

export const HearderBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderId = styled.div`
  width: 20%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;

export const HeaderTitle = styled.div`
  width: 80%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;

export const HeaderWriter = styled.div`
  width: 50%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;

export const HeaderDate = styled.div`
  width: 50%;
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`;

// 게시판 목록 바디

export const BodyColl = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #e9e9e9;
  }
  :last-child {
    border-bottom: 0;
  }
`;

export const BodyBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }
`;

export const BodyId = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
    align-items: initial;
    justify-content: space-between;
    margin: 0 0 10px 0;
  }
`;

export const HideText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #707070;
  display: none;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    display: block;
  }
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    font-size: 12px;
  }
`;

export const BodyText = styled.p<{ text: 'text' | 'date' }>`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #707070;
  ${({ text }) =>
    text === 'text'
      ? css`
          text-align: center;
        `
      : css`
          text-align: right;
        `}
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    font-size: 12px;
  }
`;

export const BodyTitle = styled.div`
  width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const BodyTitleText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #707070;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    font-size: 12px;
  }
`;

export const BodyWriter = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
    justify-content: space-between;
    margin: 0 0 10px 0;
  }
`;

export const BodyDate = styled.div`
  width: 50%;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

// 게시글 버튼

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
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
`;

export const SearchWord = styled.span`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${(props: { isMatched: boolean }) =>
    props.isMatched ? '#FF5360' : '#707070'};
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    font-size: 12px;
  }
`;

export const InputBox = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  border-radius: 10px;
  border: solid 1px #dfdfdf;
  padding: 20px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  ::placeholder {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: normal;
    color: #969696;
    transition: all 0.3s ease-in-out;
  }
  :focus::placeholder {
    color: transparent;
  }
`;
