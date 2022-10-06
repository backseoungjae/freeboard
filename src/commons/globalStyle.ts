import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'myfont';
  }

  @font-face {
    font-family: 'myfont';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/GimpoGothicBold00.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
