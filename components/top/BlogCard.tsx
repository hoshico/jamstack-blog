import Link from 'next/link';
import React, { useState } from 'react';
import Moment from 'react-moment';
import { Blog } from '../types/Blog';

type BlogCard = {
  blog: Blog;
};
const BlogCard = (props: BlogCard) => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <>
      <Link href={`/blog/${props.blog.id}`}>
        <a>
          <div
            className={
              mouseOver
                ? 'card w-full scale-105 bg-base-100 shadow-xl transition duration-300'
                : 'card w-full bg-base-100 shadow-xl duration-300'
            }
            onMouseOver={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
          >
            <figure className="lg:h-38 hidden h-[fit-content] overflow-hidden md:block md:h-36">
              <img
                className="hidden w-full object-cover transition sm:block md:h-full"
                src={
                  props.blog.photo
                    ? props.blog.photo.url
                    : 'https://api.lorem.space/image/shoes'
                }
                alt="blogイメージ"
              />
            </figure>
            <div className="card-body h-[200px] p-4">
              <Moment
                className="text-xs"
                format="YYYY/MM/DD"
              >
                {props.blog.publishedAt}
              </Moment>
              <h2 className="sm:text-md card-title text-sm">
                {props.blog.title}
              </h2>
              {/* Todo: １ヶ月以内の投稿はNEWのバッジをつける */}
              {/*<div className="badge badge-secondary">NEW</div>*/}
              <div className="card-actions mt-auto justify-end">
                {props.blog.category ? (
                  props.blog.category.map((category) => (
                    <div
                      key={category.id}
                      className="badge badge-outline"
                    >
                      <p>{category.name}</p>
                    </div>
                  ))
                ) : (
                  <div className="badge badge-outline">その他</div>
                )}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default BlogCard;
