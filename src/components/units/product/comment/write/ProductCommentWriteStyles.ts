import styled from '@emotion/styled';
import theme from '../../../../../../styles/theme';

export const Container = styled.div`
  padding-top: 40px;
  box-sizing: border-box;
  border-top: 1px solid #bdbdbd;
  margin-bottom: 40px;
  padding: 50px 0;
  box-sizing: border-box;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    padding: 50px 20px 120px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CommentBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    margin-bottom: 20px;
  }
`;

export const Imge = styled.img`
  margin-right: 15px;
`;

export const CommentTitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const TextareaBox = styled.div`
  width: 100%;
  margin-bottom: 45px;
  border: 1px solid #bdbdbd;
`;

export const InputTextarea = styled.textarea`
  outline: none;
  border: 0;
  width: 100%;
  height: 130px;
  padding: 20px;
  resize: none;
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
  cursor: pointer;
  margin-right: 25px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4f4f4f;
  padding: 14px 20px;
  box-sizing: border-box;
  outline: none;
  background-color: transparent;
  border: 1px solid #ff5360;
  color: #ff5360;
  transition: all 0.3s ease-in-out;
  :hover {
    color: #ffffff;
    background-color: #ff5360;
  }
`;
