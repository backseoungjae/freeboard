import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #ff5360;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavBox = styled.div`
  cursor: pointer;
  margin-right: 20px;
  :last-child {
    margin-right: 0;
  }
`;

export const Nav = styled.p`
  margin: 0;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #fff;
`;
