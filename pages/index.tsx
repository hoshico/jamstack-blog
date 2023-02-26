import { useState } from 'react';
import { client } from '../libs/client';
import Card from '../components/top/BlogCard';
import { Blog } from '../components/types/Blog';

import { GetStaticProps } from 'next';
import { Category } from '../components/types/Category';
import CategoryTable from '../components/category';

type HomeProps = {
  blogs: Array<Blog>;
  category: Array<Category>;
};

export default function Home({ blogs, category }: HomeProps) {
  const [showBlogs, setShowBlogs] = useState(blogs);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary py-6 dark:from-base-content dark:to-base-content sm:px-10">
        <div className="mx-auto flex w-11/12 justify-between 2xl:w-8/12">
          {/*記事エリア*/}
          <div className="w-full rounded-xl bg-base-200 p-1 lg:w-[calc(100%_-_288px)]">
            <div className="m-4 md:m-10">
              <div className="py-1">
                <ul className="grid grid-cols-1 gap-6  sm:grid-cols-2 lg:grid-cols-3">
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
          <CategoryTable
            blogs={blogs}
            category={category}
            setShowBlogs={setShowBlogs}
          />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog', queries: { limit: 20 } });
  const category = await client.get({ endpoint: 'category' });
  return {
    props: {
      blogs: data.contents,
      category: category.contents,
    },
  };
};
