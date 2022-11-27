/* eslint-disable tailwindcss/no-custom-classname */
import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-gray-600 bg-blue-500 body-font">
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link href="/">
            <a className="ml-2 md:ml-5 text-3xl normal-case btn btn-ghost">
              <span className="text-primary">hoshi</span>code
            </a>
          </Link>
          
          <Link href="/about">
            <a className="ml-auto mr-2 md:mr-5 text-xl normal-case btn btn-ghost">
              <p>about</p>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
