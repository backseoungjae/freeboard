import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { MouseEvent } from 'react';
import MySellPresenter from './MySellPresenter';
import { FETCH_SOLD_ITEMS, FETCH_SOLD_ITEM_COUNT } from './MySellQueries';

export default function MySellContainer() {
  const { data: soldItems, refetch } = useQuery(FETCH_SOLD_ITEMS);
  const { data: soldItemsCount } = useQuery(FETCH_SOLD_ITEM_COUNT);

  const router = useRouter();

  const productDetailMove = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/products/${e.currentTarget.id}`);
  };

  return (
    <MySellPresenter
      soldItems={soldItems}
      soldItemsCount={soldItemsCount}
      refetch={refetch}
      productDetailMove={productDetailMove}
    />
  );
}
