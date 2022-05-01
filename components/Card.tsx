import Link from 'next/link';
import React, { Children, useState } from 'react';
import Moment from 'react-moment';

type Blog = {
  id: string;
  createdAt: string;
  category?: string;
  photo: any;
  title: string;
  revudedAt: string;
  updateAt: string;
};
export default function Card(props) {
  //console.log(props);
  //const { children, blog } = props;
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <Link href={`/blog/${props.blog.id}`}>
      <a href="">
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
                <div className="badge badge-outline">
                  {props.blog.category.name}
                </div>
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
