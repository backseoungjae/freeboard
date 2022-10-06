import React, { MouseEvent } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { FETCH_USED_ITEMS } from './ProductListQuery';
import ProductListPresenter from './ProductListPresenter';

export default function ProductListContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const onClickMoveWrite = () => {
    router.push('/products/new');
  };

  const onClickMoveDetail =
    (el: { _id: string }) => (e: MouseEvent<HTMLDivElement>) => {
      const baskets = JSON.parse(sessionStorage.getItem('basket') || '[]');
      const temp = baskets.filter(
        (basketEl: { _id: string }) => basketEl._id === el._id
      );

      if (baskets.length >= 3) {
        baskets.pop();
      }

      if (temp.length > 0) {
        router.push(`/products/${e.currentTarget.id}`);
      } else {
        const { ...newEl } = el;
        baskets.unshift(newEl);
        sessionStorage.setItem('basket', JSON.stringify(baskets));
        router.push(`/products/${e.currentTarget.id}`);
      }
    };

  const onLoadMore = () => {
    if (!data) {
      return;
    }

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <ProductListPresenter
      data={data}
      onClickMoveDetail={onClickMoveDetail}
      onLoadMore={onLoadMore}
      onClickMoveWrite={onClickMoveWrite}
    />
  );
}
