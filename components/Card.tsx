import React, { Children } from 'react'

type Blog = {

}
export default function Card(props) {
  console.log(props)
  const { children, blog } = props;
  console.log(blog.photo)
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className='w-full'><img src="https://api.lorem.space/image/shoes" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{children}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">check</button>
        </div>
      </div>
    </div>
  )
}