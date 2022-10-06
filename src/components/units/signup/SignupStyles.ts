import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const LoginTextBox = styled.div`
  margin-bottom: 30px;
`;

export const LoginText = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ff5360;
`;

export const InputInner = styled.div`
  margin-bottom: 50px;
`;

export const InputBox = styled.div`
  width: 100%;
  margin-bottom: 30px;
  position: relative;
  :last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  font-size: 20px;
  line-height: 1.5;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  border: solid 1px #dfdfdf;
  ::placeholder {
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #969696;
    transition: all 0.3s ease-in-out;
  }
  :focus::placeholder {
    color: transparent;
  }
`;

export const ErrorText = styled.p`
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.31;
  letter-spacing: normal;
  color: #ff5360;
  position: absolute;
`;

export const ButtonBox = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  border: 1px solid #2e384b;
  background-color: #2e384b;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  :hover {
    color: #2e384b;
    background-color: transparent;
  }
`;
