import { gql } from '@apollo/client';

// 댓글 작성
export const CREATE_USEDITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      useditem {
        _id
      }
      user {
        _id
        name
      }
      createdAt
    }
  }
`;

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
