import Link from 'next/link';
import React, { useState } from 'react';
import Moment from 'react-moment';
import { Blog } from './types/Blog';

type Card = {
  blog: Blog;
}
export default function Card(props: Card) {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <Link href={`/blog/${props.blog.id}`}>
      <a>
        <div
          className="card w-full bg-base-100 shadow-xl"
          onMouseOver={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}>
          <figure className="h-32 lg:h-40 overflow-hidden">
            <img
              className={
                mouseOver
                  ? 'object-cover w-full h-full scale-110 transition'
                  : 'object-cover w-full h-full transition'
              }
              src={
                props.blog.photo
                  ? props.blog.photo.url
                  : 'https://api.lorem.space/image/shoes'
              }
              alt="blogイメージ"
            />
          </figure>
          <div className="card-body">
            <Moment className="text-xs" format="YYYY/MM/DD">
              {props.blog.publishedAt}
            </Moment>
            <h2 className="text-sm sm:text-md card-title">
              {props.blog.title}
            </h2>
            {/* １ヶ月以内の投稿はNEWのバッジをつける */}
            {/*<div className="badge badge-secondary">NEW</div>*/}
            <div className="card-actions justify-end">
              {props.blog.category ? (
                props.blog.category.map(category => (
                  <div key={category.id} className="badge badge-outline">
                    <p >{category.name}</p>
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
  );
}
