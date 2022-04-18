import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '../libs/client'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout';
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home({ blog }) {
  return (
    <>
      <Layout>
        <Main>
          <div className='py-5'>
            <ul>
              {blog.map((blog) => (
                <li key={blog.id}>
                  <Link href={`/blog/${blog.id}`}>
                    <a className='text-gray-600 body-font text-xl'>{blog.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Main>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
