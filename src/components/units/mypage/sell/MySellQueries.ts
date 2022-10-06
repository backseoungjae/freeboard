import { gql } from '@apollo/client';

export const FETCH_SOLD_ITEMS = gql`
  query ($page: Int) {
    fetchUseditemsISold(page: $page) {
      _id
      buyer {
        _id
        name
      }
      name
      contents
      price
      images
      soldAt
    }
  }
`;

export const FETCH_SOLD_ITEM_COUNT = gql`
  query {
    fetchUseditemsCountISold
  }
`;
