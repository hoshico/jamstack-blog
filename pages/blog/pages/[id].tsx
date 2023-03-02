import { useEffect, useState } from 'react';
import CategoryTable from '../../../components/category';
import Card from '../../../components/top/BlogCard';
import { Pagination } from '../../../components/layouts/Pagination';
import { HomeProps } from '../..';
import { client } from '../../../libs/client';

const BlogIndexPage = ({
  blogs,
  category,
  totalCount,
  currentPageNumber,
}: HomeProps & { currentPageNumber: number }) => {
  const [showBlogs, setShowBlogs] = useState(blogs);
  useEffect(() => {
    setShowBlogs(blogs);
  }, [blogs]);
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
            <Pagination
              currentPageValue={currentPageNumber}
              maxPageValue={Math.ceil(totalCount / 6)}
            />
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
};

export const getStaticPaths = async () => {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, index) => start + index);
  const data = await client.get({ endpoint: 'blog' });

  const { totalCount } = data;
  const paths = range(1, Math.ceil(totalCount / 6)).map(
    (i) => `/blog/pages/${i}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const offset = (id - 1) * 6;

  const limit = 6;
  const queries = { offset, limit };
  const data = await client.get({ endpoint: 'blog', queries });
  const category = await client.get({ endpoint: 'category' });
  return {
    props: {
      blogs: data.contents,
      category: category.contents,
      totalCount: data.totalCount,
      currentPageNumber: id,
    },
  };
};

export default BlogIndexPage;
