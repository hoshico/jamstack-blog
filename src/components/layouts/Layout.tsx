import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};
export default function Layout({ children, title = 'hoshicode' }: LayoutProps) {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
