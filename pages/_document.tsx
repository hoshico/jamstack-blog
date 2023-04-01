import React from 'react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html className="bg-base-300">
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="static/favicon/favicon32.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="static/favicon/favicon16.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
