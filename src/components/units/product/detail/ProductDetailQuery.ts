import { gql } from '@apollo/client';

// 상품 정보
export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
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

// 상품 삭제
export const DELETE_USEDITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

// 찜하기
export const TOGGLE_USED_ITEM = gql`
  mutation ($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

// 바로구매
export const CREATE_POINT_BUY_AND_SELL = gql`
  mutation ($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;
