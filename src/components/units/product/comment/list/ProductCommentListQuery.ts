import { gql } from '@apollo/client';

// 댓글 리스트
export const FETCH_USEDITEM_QUESTIONS = gql`
  query ($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      user {
        _id
        email
        name
      }
      createdAt
    }
  }
`;

// 댓글 삭제
export const DELETE_PRODUCT_COMMENT = gql`
  mutation ($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

// 댓글 수정
export const UPDATE_COMMENT = gql`
  mutation (
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      createdAt
    }
  }
`;
