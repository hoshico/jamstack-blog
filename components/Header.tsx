/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-gray-600 bg-blue-500 body-font">
      <div className="navbar bg-base-300">
        {/*<div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>*/}
        <div className="flex-1">
          <Link href="/">
            <a className="ml-5 text-3xl normal-case btn btn-ghost">
              <span className="text-primary">hoshi</span>code
            </a>
          </Link>
          <Link href="/about">
            <a className="ml-auto mr-5 text-xl normal-case btn btn-ghost">
              <p>about</p>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
