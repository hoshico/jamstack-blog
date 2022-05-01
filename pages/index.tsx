import Link from 'next/link';
import { client } from '../libs/client';
import Layout from '../components/Layout';
import Main from '../components/Main';
import Card from '../components/Card';
import { Blog } from '../components/types/Blog';
import { useState } from 'react';

type Props = {
  blogs: Array<Blog>;
};

export default function Home({ blogs, category }) {
  const [showBlogs, setShowBlogs] = useState(blogs);
  const categoryNameAndImageList = category.map(category => [category.name, category.image.url]);
  const selectCategory = category => {
    if (category === 'all') {
      setShowBlogs(blogs);
    } else {
      // カテゴリーを持つ記事を選択
      const selectBlogs = blogs.filter(blog => {
        const haveCategory = blog.category.map(category => category.name);
        return haveCategory.includes(category);
      });
      setShowBlogs(selectBlogs);
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl my-6 px-10 m-auto flex justify-between">
        {/*記事エリア*/}
        <div className="w-full md:w-[calc(100%_-_288px)] p-1 bg-base-200 rounded-xl">
          <div className="mx-10 my-10">
          <div className="py-1">
          <ul className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5">
            {!showBlogs.length ? (
              <p className="text-center m-auto text-xl font-bold">
                ただいま準備中
              </p>
            ) : (
              showBlogs.map(blog => (
                <li key={blog.id}>
                  <Card blog={blog} />
                </li>
              ))
            )}
          </ul>
        </div>
          </div>
        </div>
        {/*カテゴリー*/}
        <div className="sticky top-10 bg-base-200 py-10 px-2 w-[250px] h-[fit-content] shadow rounded-xl hidden md:block">
          <p className="font-bold mb-5 pl-2">カテゴリー</p>
          <ul className="list-disc pl-6">
            <li className="flex items-center mb-3 hover:opacity-60 cursor-pointer" onClick={() => selectCategory('all')}>
              <div className="w-8 mr-4 mask mask-squircle">
                <svg className="w-8 h-8 dark:text-white bg-base-content" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
              </div>
              <p>ALL</p>
            </li>
            {categoryNameAndImageList.length ? (
              categoryNameAndImageList.map(category => (
                <li key={category[0]} className="flex hover:opacity-60 items-center mb-3 cursor-pointer" onClick={() => selectCategory(category[0])}>
                  <div className="w-8 mr-4 mask mask-squircle">
                    <img src={category[1]} />
                  </div>
                  <p>{category[0]}</p>
                </li>
              ))
            ) : (
              <p>投稿がありません</p>
            )}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const category = await client.get({ endpoint: 'category' });
  return {
    props: {
      blogs: data.contents,
      category: category.contents,
    },
  };
};
