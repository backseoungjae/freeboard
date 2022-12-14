import { GraphQLClient } from 'graphql-request';
import { gql } from '@apollo/client';

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;
// accessToken 받는 함수
export async function getAccessToken() {
  try {
    // refreshToken으로 accessToken 재 발급 받기
    const graphQLClient = new GraphQLClient(
      'https://backend07.codebootcamp.co.kr/graphql',
      { credentials: 'include' }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;

    // 재발급 받은 accsesToken 저장하기
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(error);
    }
  }
}
