import { GetStaticProps } from 'next';
import React from 'react';
import Moment from 'react-moment';
import Layout from '../../components/Layout';
import { client } from '../../libs/client';
import cheerio from "cheerio";
import hljs from 'highlight.js';
import "highlight.js/styles/hybrid.css";


export default function Blog({ blog, highlightedBody }) {

  return (
    <Layout>
      <div className="main bg-blue-100 w-full m-auto ">
        <div className="min-h-screen">
          <div className="py-20">
            <div className="text-center text-4xl font-extrabold tracking-wider">
              {blog.title}
            </div>
            <div className="w-28 mt-5 m-auto flex">
              <Moment className="text-xs text-gray-400" format="YYYY.MM.DD">
                {blog.publishedAt}
              </Moment>
              <p className="text-xs text-gray-400">に公開</p>
            </div>
            {/*メインコンテンツ*/}  
            <div className="max-w-7xl px-10 mt-12 mx-auto flex justify-between">
              {/*本文*/}
              <div className="w-[calc(100%_-_288px)] p-10 bg-base-100 rounded">
              <div dangerouslySetInnerHTML={{ __html: highlightedBody }}></div>
              </div>
              {/*サイド*/}
              <aside className="w-72 p-10 bg-base-100 ml-5 rounded">
                  {blog.category ? <p>{blog.category.name}</p> : <p>ない</p>}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  const $ = cheerio.load(data.body);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    console.log($.html());    // ハイライト済みのHTML
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  
  return {
    props: {
      blog: data,
      highlightedBody: $.html(),
    },
  };
};



