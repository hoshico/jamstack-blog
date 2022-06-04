/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'react';

import { client } from '../libs/client';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Blog } from '../components/types/Blog';
import { Category } from '../components/types/Category';
import { Profile } from '../components/types/Profile';
import { GetStaticProps } from 'next';

type HomeProps = {
  blogs: Array<Blog>;
  category: Array<Category>;
  profile: Array<Profile>;
};


export default function Home({ blogs, category }: HomeProps) {
  //console.log(profile);
  const [showBlogs, setShowBlogs] = useState(blogs);
  const selectCategory = (category: string) => {
    if (category === 'all') {
      setShowBlogs(blogs);
    } else {
      // カテゴリーを持つ記事を選択
      const selectBlogs = blogs.filter(blog => {
        const haveCategory = blog.category.map((category) => category.name);
        return haveCategory.includes(category);
      });
      setShowBlogs(selectBlogs);
    }
  };

  return (
    <>
      <Layout>
        <div className="flex justify-between sm:px-10 m-auto my-6 max-w-7xl">
          {/*記事エリア*/}
          <div className="p-1 w-full rounded-xl md:w-[calc(100%_-_288px)] bg-base-200">
            <div className="m-2 md:m-10">
              <div className="py-1">
                <ul className="grid grid-cols-1 gap-5  sm:grid-cols-2 lg:grid-cols-3">
                  {!showBlogs.length ? (
                    <p className="m-auto text-xl font-bold text-center">
                      まだ投稿はありません
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
          <div className="hidden sticky top-10 py-10 px-2 w-[250px] h-[fit-content] rounded-xl shadow md:block bg-base-200">
            <p className="pl-2 mb-5 font-bold">カテゴリー</p>
            <ul className="pl-6 list-disc">
              <li
                className="flex items-center mb-3 hover:opacity-60 cursor-pointer"
                onClick={() => selectCategory('all')}>
                <div className="mr-4 w-8 mask mask-squircle">
                  <svg
                    className="p-1 w-8 h-8 dark:text-white bg-base-content"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                  </svg>
                </div>
                <p>ALL</p>
              </li>
              {category.length ? (
                category.map(category => (
                  <li
                    key={category.id}
                    className="flex items-center mb-3 hover:opacity-60 cursor-pointer"
                    onClick={() => selectCategory(category.name)}>
                    <div className="mr-4 w-8 mask mask-squircle">
                      <img src={category.image.url} alt=""/>
                    </div>
                    <p>{category.name}</p>
                  </li>
                ))
              ) : (
                <p>投稿がありません</p>
              )}
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });
  const category = await client.get({ endpoint: 'category' });
  return {
    props: {
      blogs: data.contents,
      category: category.contents,
    },
  };
};
