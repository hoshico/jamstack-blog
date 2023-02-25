import { Dispatch, SetStateAction, useState } from 'react';
import { Blog } from '../types/Blog';
import { Category } from '../types/Category';

type Props = {
  blogs: Array<Blog>;
  category: Array<Category>;
  setShowBlogs: Dispatch<SetStateAction<Blog[]>>;
};

const CategoryTable = (props: Props) => {
  const { blogs, category, setShowBlogs } = props;
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
  );
};

export default CategoryTable;
