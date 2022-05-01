import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-gray-600 body-font bg-blue-500">
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
            <a className="btn btn-ghost ml-5 normal-case text-3xl">
              <span className="text-primary">hoshi</span>code
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
