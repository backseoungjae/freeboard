import { gql } from '@apollo/client';

// 보기 API
export const FETCH_BOARD_COMMENTS = gql`
  query ($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;

// 삭제 API
export const DELETE_BOARD_COMMENT = gql`
  mutation ($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

// 수정 API
export const UPDATE_BOARD_COMMENT = gql`
  mutation (
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      boardCommentId: $boardCommentId
      password: $password
      updateBoardCommentInput: $updateBoardCommentInput
    ) {
      _id
      writer
      contents
      rating
    }
  }
`;
