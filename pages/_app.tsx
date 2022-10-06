import '../styles/globals.css';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Layout from '../src/components/commons/layout/Layout';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/commons/globalStyle';
import ApolloSetting from '../src/components/commons/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
