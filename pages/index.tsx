import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import useScrollFadeIn from '../src/components/commons/hooks/useScrollFadeIn';
import theme from '../styles/theme';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/main.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Inner = styled.div`
  width: 100%;
  padding: 0 20px;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box = styled.div`
  width: 33%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
    height: 300px;
    margin-bottom: 10px;
    :last-of-type {
      margin-bottom: 0;
    }
  }
`;

const NavText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BoardImg = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

export default function index() {
  const router = useRouter();

  const onClickBoard = () => {
    router.push('/boards');
  };

  const onClickProduct = () => {
    router.push('/products');
  };

  const onClickMypage = () => {
    router.push('/mypage');
  };

  return (
    <Wrapper>
      <Inner>
        <Box {...useScrollFadeIn('up', 1, 0)} onClick={onClickBoard}>
          <NavText>자유게시판</NavText>
          <BoardImg src="/images/boards.jpeg" alt="자유게시판 이미지" />
        </Box>
        <Box {...useScrollFadeIn('down', 1, 0)} onClick={onClickProduct}>
          <NavText>상품리스트</NavText>
          <BoardImg src="/images/product.jpeg" alt="상품리스트 이미지" />
        </Box>
        <Box {...useScrollFadeIn('up', 1, 0)} onClick={onClickMypage}>
          <NavText>마이페이지</NavText>
          <BoardImg src="/images/mypage.jpeg" alt="마이페이지 이미지" />
        </Box>
      </Inner>
    </Wrapper>
  );
}
