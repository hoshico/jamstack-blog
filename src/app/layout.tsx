import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { GA_MEASUREMENT_ID } from "../libs/gtag";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: {
    default: "Hoshico Notes",
    template: "%s | Hoshico Notes",
  },
  description: "日々の開発で学んだことや技術的な備忘録を綴っています。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
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
      </head>
      <body>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
