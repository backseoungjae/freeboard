import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { MouseEvent, useEffect, useState } from 'react';
import theme from '../../../../../styles/theme';

const Wrapper = styled.div`
  width: 155px;
  height: 320px;
  background: #ffffff;
  border: 1px solid #000000;
  padding: 30px;
  box-sizing: border-box;
  position: fixed;
  top: 600px;
  right: 50px;
  z-index: 2;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    width: 100%;
    height: 150px;
    top: initial;
    right: initial;
    left: 0;
    bottom: 0;
  }
`;

const TitleBox = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
`;

const HideBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    flex-direction: initial;
  }
`;

const Img = styled.img`
  cursor: pointer;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
  :last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: ${theme.deviceSizes.tablet}) {
    margin: 0;
    margin-right: 10px;
    :last-child {
      margin-right: 0;
    }
  }
`;

export default function Recent() {
  const [basketItems, setBasketItems] = useState([]);

  const router = useRouter();

  const recentMove = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/products/${e.currentTarget.id}`);
  };

  useEffect(() => {
    const baskets = JSON.parse(sessionStorage.getItem('basket') || '[]');

    if (baskets.length > 3) {
      baskets.pop();
    }
    setBasketItems(baskets);
  }, [basketItems.length++]);

  return (
    <Wrapper>
      <TitleBox>
        <Title>최근 본 상품</Title>
      </TitleBox>
      <HideBox>
        {basketItems.map((el: { _id: string; images: string[] }) => (
          <Img
            id={el._id}
            key={el._id}
            onClick={recentMove}
            src={
              el.images[0]
                ? `https://storage.googleapis.com/${el.images[0]}`
                : '/images/logo.jpeg'
            }
          />
        ))}
      </HideBox>
    </Wrapper>
  );
}
