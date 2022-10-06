import { gql } from '@apollo/client';

export const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`;

export const LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

// 포인트 구매
export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation ($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
    }
  }
`;
