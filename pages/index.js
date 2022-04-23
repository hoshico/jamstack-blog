import Link from 'next/link'
import { client } from '../libs/client'
import Layout from '../components/Layout';
import Main from '../components/Main'
import Card from '../components/Card'
import { useEffect } from 'react';

export default function Home({ blogs }) {

  return (
    <>
      <Layout>
        <Main>
          <div className='py-5'>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {blogs.map((blog) => (
                <li key={blog.id}>
                  <Card blog={blog}>
                    <Link href={`/blog/${blog.id}`}>
                      <a className='text-gray-600 body-font text-xl'>{blog.title}</a>
                    </Link>
                  </Card> 
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
      blogs: data.contents,
    },
  };
};

