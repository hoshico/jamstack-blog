import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layouts/Layout';
import Script from 'next/script';
import * as gtag from '../libs/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${gtag.GA_MEASUREMENT_ID}');
           `,
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
