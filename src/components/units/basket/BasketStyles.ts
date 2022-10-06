import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  padding: 30px 20px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const BasketBox = styled.div`
  cursor: pointer;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  width: 30%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid #ff5360;
  }
`;

export const BasketDateBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const BasketDate = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
`;

export const BasketTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const BasketImg = styled.img`
  width: 100%;
  height: 300px;
`;

export const BasketSellerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;

export const BasketRemarkBox = styled.div`
  margin: 0 0 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const BasketText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

export const BasketTagBox = styled.div`
  display: flex;
  align-items: center;
`;

export const BasketTag = styled.p`
  margin: 0 5px 0 0;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: #ff5360;
  border-radius: 5px;
  padding: 3px;
  box-sizing: border-box;
  :last-of-type {
    margin: 0;
  }
`;
