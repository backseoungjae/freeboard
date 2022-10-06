import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import React, { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState, newBasketsState } from '../store';
import { onError } from '@apollo/client/link/error';
import { getAccessToken } from '../../../commons/libraries/getAccessToken';

export default function ApolloSetting(props: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setItems] = useRecoilState(newBasketsState);

  useEffect(() => {
    // 기존 작성 코드
    // const accessToken = localStorage.getItem('token');
    // setAccessToken(accessToken || '');

    // 수정 코드
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });

    const newBaskets = JSON.parse(localStorage.getItem('newBaskets') || '[]');
    setItems(newBaskets || '');
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1 error를 catch
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === 'UNAUTHENTICATED') {
          // 2-1 refreshToken으로 accessToken 재 발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2 재발급 받은 accsesToken 저장하기
            setAccessToken(newAccessToken);
            // 3- 1. 재발급 받은 accessToken으로 방금 실패한 query 재 요청
            // 정보 바꿔주는거
            operation.setContext({
              // 정보 가져오는거
              ...operation.getContext().headers,
              headers: {
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꿔치기
              },
            });

            // 3-2. 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  // 이미지 업로드 위해 apollo-upload-client 설치
  const uploadLink = createUploadLink({
    uri: 'https://backend07.codebootcamp.co.kr/graphql',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    // 리프레쉬 토큰으로 변경 하려면 밑에 코드를 작성해야한다
    credentials: 'include',
  });

  // 셋팅 이유
  // rest api는 api 주소를 알지만 graphql api는 api 주소를 모르기 떄문에 _app.js에서 작성
  // graphql에서 백엔드 주소를 적어주고, 백엔드 안에 있는 서로 다른 api(CRUD)를 따로 작성 하지 않아도 사용 할 수 있다.
  const client = new ApolloClient({
    // 명확한 타입이 없기 때문에 아래와 같이 작성... document에 나와 있다. 나중에 확인 바람!!!
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    // cache는 임시로 따로 저장하는 코드
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
