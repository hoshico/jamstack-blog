import { GetServerSideProps } from 'next';
import React from 'react';
import Moment from 'react-moment';
import BlogBody from '../../components/BlogBody';
import Layout from '../../components/Layout';
import { client } from '../../libs/client';

export default function Blog({ blogs }) {
  console.log(blogs);
  return (
    <Layout>
      <div className="main bg-blue-100 w-full m-auto ">
        <div className="min-h-screen">
          <div className="py-20">
            <div className="text-center text-3xl font-extrabold tracking-wider">
              {blogs.title}
            </div>
            <div className="w-28 mt-5 m-auto flex">
              <Moment className="text-xs text-gray-400" format="YYYY.MM.DD">
                {blogs.publishedAt}
              </Moment>
              <p className="text-xs text-gray-400">に公開</p>
            </div>
            {/*メインコンテンツ*/}  
            <div className="max-w-7xl px-10 mt-12 mx-auto flex justify-between">
              {/*本文*/}
              <div className="w-[calc(100%_-_288px)] p-10 bg-base-100 rounded">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${blogs.body}`,
                  }}
                />
              </div>
              {/*サイド*/}
              <aside className="w-72 p-10 bg-base-100 ml-5 rounded">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${blogs.category}`,
                  }}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blog',
    contentId: idExceptArray,
  });

  return {
    props: {
      blogs: data,
    },
  };
};
