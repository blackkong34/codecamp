import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
        </style>
      </Head>
      <body>
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  );
}
