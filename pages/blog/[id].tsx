/* eslint-disable tailwindcss/no-custom-classname */
import { GetStaticPaths } from 'next';
import Moment from 'react-moment';
import Layout from '../../components/Layout';
import { client } from '../../libs/client';
import cheerio from "cheerio";
import hljs from 'highlight.js';
import "highlight.js/styles/hybrid.css";
import { renderToc } from '../../libs/render-toc';
import TableOfContents from '../../components/TableOfContents';
import type { Blog } from '../../components/types/Blog';
import { Params } from 'next/dist/server/router';

type BlogDetail = {
  blog: Blog;
  highlightedBody?: any;
};
export default function Blog({ blog, highlightedBody }: BlogDetail) {
  const toc = renderToc(blog.body)
  return (
    <Layout>
      <div data-theme="winter">
        <div className="m-auto w-full bg-gradient-to-b from-primary-content via-info to-neutral-content ">
          <div className="min-h-screen">
            <div className="py-20">
              <div className="px-4 text-md md:text-4xl font-extrabold tracking-wider md:w-full md:text-center">
                {blog.title}
              </div>
              <div className="flex m-auto mt-2 px-4 md:px-0 md:mt-5 md:w-28">
                <Moment className="text-xs text-gray-500" format="YYYY.MM.DD">
                  {blog.publishedAt}
                </Moment>
                <p className="text-xs text-gray-500">に公開</p>
              </div>
              {/*メインコンテンツ*/}  
              <div className="flex justify-between  md;px-10 mx-auto mt-4 md:mt-12 max-w-7xl">
                {/*本文*/}
                <div className="p-4 md:p-10 w-full md:rounded-xl shadow md:w-[calc(100%_-_288px)] bg-base-100">
                  <div className="main-text" dangerouslySetInnerHTML={{ __html: highlightedBody }}></div>
                </div>
                {/*サイド*/}
                <TableOfContents toc={toc}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  const $ = cheerio.load(data.body);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
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



