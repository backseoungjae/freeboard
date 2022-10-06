import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import ProductContainer from '../../../../src/components/units/product/write/ProductContainer';

const FETCH_USEDITEM = gql`
  query ($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      useditemAddress {
        zipcode
        address
        lat
        lng
      }
      seller {
        _id
        email
        name
      }
    }
  }
`;

export default function index() {
  const router = useRouter();

  const id = router.query.productId;

  const { data, loading } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: id,
    },
  });

  return loading ? <></> : <ProductContainer data={data} isEdit={true} />;
}
