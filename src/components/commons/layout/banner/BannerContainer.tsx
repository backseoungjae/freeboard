import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { css } from '@emotion/react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

export const Container = styled.div``;

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  height: 400px;
`;

const CarouselList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
  height: 100%;
`;

const CarouseListItem = styled.li<{ activeIndex: number }>`
  flex: 1 0 100%;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
  transition: 200ms ease;
`;

export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const ArrowButton = styled.button<{ pos: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  z-index: 1;
  padding: 8px 12px;
  font-size: 48px;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  border: 0;
  margin: 0;
  cursor: pointer;
  ${({ pos }) =>
    pos === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `}
`;

const NavButton = styled.button<{ isActive?: boolean }>`
  cursor: pointer;
  width: 15px;
  height: 5px;
  border: 0;
  border-radius: 5px;
  background-color: #ff5360;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.3)};
`;

const NavItem = styled.li`
  display: inline-block;
  margin-right: 5px;
  :last-of-type {
    margin-right: 0;
  }
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 20px 0;
  display: flex;
  justify-content: center;
`;

const banners = [
  '/images/banner.jpeg',
  '/images/banner2.jpeg',
  '/images/banner3.jpeg',
];

export default function BannerContainer() {
  const [carousel, setCarousel] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // 클릭 시 이동 하는 이벤트
  const handleNext = () => {
    setCarousel((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setCarousel((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goTo = (i: number) => {
    setCarousel(i);
  };

  // 마우스 올렸을 때 캐러셀이 멈추는 이벤트
  const handleMouseEnter = () => setIsFocused(true);

  const handleMouseLeave = () => setIsFocused(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    // 마우스가 포커스가 안됬을 때 저절로 이동 아니면 멈춤
    if (!isFocused) {
      intervalId = setInterval(handleNext, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isFocused]);

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Wrapper>
        {/* <Slider {...settings}>{slideMap}</Slider> */}
        <ArrowButton pos="left" onClick={handlePrev}>
          <RiArrowDropLeftLine />
        </ArrowButton>
        <CarouselList>
          {banners.map((banner, i) => (
            <CarouseListItem activeIndex={carousel} key={i}>
              <SlideImg src={banner} />
            </CarouseListItem>
          ))}
        </CarouselList>
        <ArrowButton pos="right" onClick={handleNext}>
          <RiArrowDropRightLine />
        </ArrowButton>
      </Wrapper>
      <Nav>
        {Array.from({ length: banners.length }).map((_, i) => (
          <NavItem key={i} onClick={() => goTo(i)}>
            <NavButton isActive={carousel === i} />
          </NavItem>
        ))}
      </Nav>
    </Container>
  );
}
