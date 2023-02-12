import { useState } from 'react';
import { client } from '../libs/client';
import Card from '../components/top/BlogCard';
import { Blog } from '../components/types/Blog';
import { Category } from '../components/types/Category';
import { GetStaticProps } from 'next';

type HomeProps = {
  blogs: Array<Blog>;
  category: Array<Category>;
};

export default function Home({ blogs, category }: HomeProps) {
  const [showBlogs, setShowBlogs] = useState(blogs);
  const selectCategory = (category: string) => {
    if (category === 'all') {
      setShowBlogs(blogs);
    } else {
      // カテゴリーを持つ記事を選択
      const selectBlogs = blogs.filter((blog) => {
        const haveCategory = blog.category.map((category) => category.name);
        return haveCategory.includes(category);
      });
      setShowBlogs(selectBlogs);
    }
  };

  return (
    <>
      <div className="m-auto my-6 flex max-w-7xl justify-between sm:px-10">
        {/*記事エリア*/}
        <div className="w-full rounded-xl bg-base-200 p-1 lg:w-[calc(100%_-_288px)]">
          <div className="m-2 md:m-10">
            <div className="py-1">
              <ul className="grid grid-cols-1 gap-5  sm:grid-cols-2 lg:grid-cols-3">
                {!showBlogs.length ? (
                  <p className="m-auto text-center text-xl font-bold">
                    まだ投稿はありません
                  </p>
                ) : (
                  showBlogs.map((blog) => (
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
        <div className="sticky top-10 hidden h-[fit-content] w-[250px] rounded-xl bg-base-200 py-10 px-2 shadow lg:block">
          <p className="mb-5 pl-2 font-bold">カテゴリー</p>
          <ul className="list-disc pl-6">
            <li
              className="mb-3 flex cursor-pointer items-center hover:opacity-60"
              onClick={() => selectCategory('all')}
            >
              <div className="mask mask-squircle mr-4 w-8">
                <svg
                  className="h-8 w-8 bg-base-content p-1 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <p>ALL</p>
            </li>
            {category.length ? (
              category.map((category) => (
                <li
                  key={category.id}
                  className="mb-3 flex cursor-pointer items-center hover:opacity-60"
                  onClick={() => selectCategory(category.name)}
                >
                  <div className="mask mask-squircle mr-4 w-8">
                    <img
                      src={category.image.url}
                      alt=""
                    />
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
