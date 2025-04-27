import React from "react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { GA_MEASUREMENT_ID } from "../src/libs/gtag";

export default class Document extends NextDocument {
  render() {
    return (
      <Html className="bg-base-300">
        <Head>
          {/* GA_TRACKING_ID が設定されていない場合は、なし */}
          {GA_MEASUREMENT_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
        `,
                }}
              />
            </>
          )}
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
