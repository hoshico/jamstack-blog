import Head from 'next/head';
import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children, title = 'hoshicode' }) {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary ">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className='min-h-screen'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
