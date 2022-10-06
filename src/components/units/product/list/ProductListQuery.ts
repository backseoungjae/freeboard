import { gql } from '@apollo/client';

export const FETCH_USED_ITEMS = gql`
  query ($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
      createdAt
      seller {
        name
        email
      }
    }
  }
`;
