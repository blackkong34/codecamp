import { css } from "@emotion/react";

/* http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 License: none (public domain) */

export const globalStyles = css`
  @font-face {
    font-family: "notoSans";
    src: url("/fonts/NotoSansKR-Regular.otf");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "notoSans";
    text-decoration: none;
  }

  body {
    line-height: 1;
    overflow-x: hidden;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html {
    font-size: 16px;
  }
  input,
  button,
  a {
    font-family: inherit;
    /* color: inherit; */
    border: none;
    outline: none;
  }
  button {
    background: none;
    cursor: pointer;
  }
`;
