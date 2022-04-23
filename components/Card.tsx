import React, { Children } from 'react';

type Blog = {};
export default function Card(props) {
  if(props.blog.category) {
    console.log(props.blog.category.name)
  }
  //console.log(props);
  const { children, blog } = props;
  return (
   

    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="object-content" src={props.blog.photo? props.blog.photo.url : "https://api.lorem.space/image/shoes"} alt="blogイメージ" />
      </figure>
      <div className="card-body">
        <p className="text-xs">2022/04/30</p>
        <h2 className="card-title">{children}</h2>
        {/* １ヶ月以内の投稿はNEWのバッジをつける */}
        {/*<div className="badge badge-secondary">NEW</div>*/}
        <div className="card-actions justify-end">
          {props.blog.category ? <div className="badge badge-outline">{props.blog.category.name}</div> : <div className="badge badge-outline">その他</div>}
        </div>
      </div>
    </div>
  );
}
