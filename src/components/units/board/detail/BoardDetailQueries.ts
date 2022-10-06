import { gql } from '@apollo/client';

export const FETCH_BOARD = gql`
  query ($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      writer
      contents
      createdAt
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

// 삭제 api
export const DELETE_BOARD = gql`
  mutation ($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

// 좋아요 api
export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

// 싫어요 api
export const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;
