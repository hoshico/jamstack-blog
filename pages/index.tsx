import Link from 'next/link'
import { client } from '../libs/client'
import Layout from '../components/Layout';
import Main from '../components/Main'
import Card from '../components/Card'
import { Blog } from '../components/types/Blog';

type Props = {
  blogs: Array<Blog>;
}

export default function Home({blogs, category}) {
  console.log(blogs)
  console.log(category)
  return (
    <Layout>
      <Main>
        <div className='py-5'>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {blogs.map((blog) => (
              <li key={blog.id}>
                <Card blog={blog} />
              </li>
            ))}
          </ul>
        </div>
      </Main>
    </Layout>
  )
}


export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  const category = await client.get({ endpoint: "category" });
  return {
    props: {
      blogs: data.contents,
      category: category.contents,
    },
  };
};

