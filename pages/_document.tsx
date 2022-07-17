import React from 'react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="static/favicon/hoshico32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="static/favicon/hoshico16.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
