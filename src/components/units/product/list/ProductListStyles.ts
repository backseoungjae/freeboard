import styled from '@emotion/styled';
import theme from '../../../../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  box-sizing: border-box;
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  outline: none;
  cursor: pointer;
  padding: 12px 30px;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px solid #000000;
  color: #ff5360;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  transition: all 0.3s ease-in-out;
  :hover {
    color: #ffffff;
    border: solid 1px #ff5360;
    background-color: #ff5360;
  }
`;

export const SubWrapper = styled.div`
  margin-top: 50px;
  height: 1000px;
  overflow-y: auto;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: ${theme.deviceSizes.mobile}) {
    justify-content: center;
  }
`;

export const ItemInner = styled.div`
  margin: 0;
  cursor: pointer;
  width: 250px;
  height: 320px;
  border: 1px solid #555555;
  margin-bottom: 30px;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 220px;
`;

export const Inner = styled.div`
  padding: 15px;
  box-sizing: border-box;
`;

export const TitleBox = styled.div`
  margin-bottom: 15px;
`;

export const ItemText = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CreateTime = styled.p`
  color: #a9a9a9;
  font-weight: 500;
  font-size: 12px;
  margin: 0;
`;
