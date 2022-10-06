import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { MouseEvent } from 'react';
import MyPickPresenter from './MyPickPresenter';

export const FETCH_PICK_LIST = gql`
  query ($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      images
      pickedCount
      buyer {
        _id
      }
      seller {
        _id
        name
      }
    }
  }
`;

const FETCH_PICK_COUNT = gql`
  query {
    fetchUseditemsCountIPicked
  }
`;

export default function MyPickContainer() {
  const { data: pickList, refetch } = useQuery(FETCH_PICK_LIST, {
    variables: {
      search: '',
      page: 0,
    },
  });
  const { data: pickListCount } = useQuery(FETCH_PICK_COUNT);

  const router = useRouter();

  const productDetailMove = (e: MouseEvent<HTMLDivElement>) => {
    router.push(`/products/${e.currentTarget.id}`);
  };

  return (
    <MyPickPresenter
      pickList={pickList}
      refetch={refetch}
      pickListCount={pickListCount}
      productDetailMove={productDetailMove}
    />
  );
}
