import { css, SerializedStyles } from '@emotion/core';
import { breakpoints, Theme } from './index';

const globalStyle = (theme: Theme): SerializedStyles => css`
  * {
    font-family: 'Montserrat', sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
    color: ${theme.colors.primary};
    font-weight: lighter;
  }
  p {
    font-size: 90%;
    ${breakpoints.tablet} {
      font-size: 95%;
    }
    ${breakpoints.desktop} {
      font-size: 100%;
    }
    padding: 0;
    margin: 0;
    font-weight: lighter;
  }
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.primary};
    font-size: 90%;
    ${breakpoints.tablet} {
      font-size: 95%;
    }
    ${breakpoints.desktop} {
      font-size: 100%;
    }
  }
`;

export default globalStyle;
