import Link from 'next/link';
import Header from './Header';

export default function Main({ children, categoryList}) {
  return (
    <>
      {/*<div className="max-w-7xl my-6 px-10 m-auto flex justify-between">
        {/*記事エリア*/}
        <div className="w-full md:w-[calc(100%_-_288px)] p-1 bg-base-200 rounded-xl">
          <div className="mx-10 my-10">{children}</div>
        </div>
        {/*カテゴリー*/}
        <div className="sticky top-10 bg-base-200 py-10 px-2 w-[250px] h-[fit-content] shadow rounded-xl hidden md:block">
          <p className="font-bold mb-5 pl-2">カテゴリー</p>
          <ul className="list-disc pl-6">
            <li className="flex items-center mb-3">
              <div className="w-8 mr-4 mask mask-squircle">
                <img src="https://api.lorem.space/image/face?hash=47449" />
              </div>
              <p>ALL</p>
            </li>
            {categoryList.length ? (
              categoryList.map(category => (
                <li key={category} className="flex items-center mb-3">
                  <div className="w-8 mr-4 mask mask-squircle">
                    <img src="https://api.lorem.space/image/face?hash=47449" />
                  </div>
                  <p>{category}</p>
                </li>
              ))
            ) : (
              <p>投稿がありません</p>
            )}
          </ul>
        </div>
      </div>*/}
    </>
  );
}
