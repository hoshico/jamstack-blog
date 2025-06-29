"use client";

import Image from "next/image";
import { Switch } from "../ui/switch";
import { useState } from "react";
import Link from "next/link";

export default function AboutDetail() {
  const [isDiagonal, setIsDiagonal] = useState(false);

  return (
    <>
      {/* md以上: アニメーション付き */}
      <div className="mx-auto hidden w-[65ch] md:block">
        <div className="flex justify-end">
          <div className="flex flex-row items-center gap-2">
            <p className="animate-bounce font-bold">click me</p>
            <Switch checked={isDiagonal} onCheckedChange={setIsDiagonal} />
          </div>
        </div>

        <div
          className={`mt-10 w-full p-6 shadow-lg transition-all duration-700 ${
            isDiagonal &&
            "perspective-distant rotate-x-51 rotate-z-33 transform-3d transform-style-preserve-3d relative"
          }`}
        >
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <h1
                className={`duration-1500 text-2xl font-bold transition-all ${
                  isDiagonal && "translate-x-130"
                }`}
              >
                hoshico
              </h1>
            </div>
          </div>

          <div className="about-contents mt-4">
            <div className="flex flex-row justify-between gap-2">
              <div className="gap-2">
                <p className="text-lg leading-10">東京在住</p>
                <p className="text-lg leading-10">2021年よりエンジニア</p>
              </div>
              <Link
                href="https://github.com/hoshico"
                className={!isDiagonal ? "pointer-events-none" : ""}
              >
                <div
                  className={`duration-800 transition-all delay-300 ${
                    isDiagonal ? "scale-100 opacity-100" : "scale-95 opacity-0"
                  }`}
                >
                  <Image
                    src="/icons/github.svg"
                    alt="Logo"
                    width={40}
                    height={40}
                  />
                </div>
              </Link>
            </div>
            <p className="mb-2 text-lg leading-10">使用技術: </p>
            <ol className="transform-3d perspective-distant pl-0">
              <li
                className={`flex items-center gap-2 transition-all duration-700 before:mr-2 before:text-2xl before:content-['•'] ${
                  isDiagonal && "translate-z-[200px] shadow-md"
                }`}
              >
                <div className="flex flex-row items-center gap-2">
                  React
                  <Image
                    src="/icons/react.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </li>
              <li
                className={`flex items-center gap-2 transition-all duration-700 before:mr-2 before:text-2xl before:content-['•'] ${
                  isDiagonal &&
                  "translate-z-[200px] translate-x-[-10px] shadow-md"
                }`}
              >
                <div className="flex flex-row items-center gap-2">
                  Next.js
                  <Image
                    src="/icons/next.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </li>
              <li
                className={`flex items-center gap-2 transition-all duration-700 before:mr-2 before:text-2xl before:content-['•'] ${
                  isDiagonal &&
                  "translate-z-[230px] translate-x-[-10px] shadow-md"
                }`}
              >
                <div className="flex flex-row items-center gap-2">
                  TypeScript
                  <Image
                    src="/icons/typescript.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </li>
              <li
                className={`flex items-center gap-2 transition-all duration-700 before:mr-2 before:text-2xl before:content-['•'] ${
                  isDiagonal &&
                  "translate-z-[180px] translate-x-[-10px] shadow-md"
                }`}
              >
                <div className="flex flex-row items-center gap-2">
                  Tailwind CSS
                  <Image
                    src="/icons/tailwindcss.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </li>
              <li
                className={`flex items-center gap-2 transition-all duration-700 before:mr-2 before:text-2xl before:content-['•'] ${
                  isDiagonal &&
                  "translate-z-[200px] translate-x-[-10px] shadow-md"
                }`}
              >
                <div className="flex flex-row items-center gap-2">
                  Node.js
                  <Image
                    src="/icons/node.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </li>
              <li
                className={`flex items-center gap-2 transition-all duration-700 before:mr-2 before:text-2xl before:content-['•'] ${
                  isDiagonal &&
                  "translate-z-[200px] translate-x-[-10px] shadow-md"
                }`}
              >
                <div className="flex flex-row items-center gap-2">
                  Express
                  <Image
                    src="/icons/express.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </li>
              <li
                className={`flex items-center gap-2 transition-all duration-700 before:mr-2 before:text-2xl before:content-['•'] ${
                  isDiagonal &&
                  "translate-z-[110px] translate-x-[-10px] shadow-md"
                }`}
              >
                <div className="flex flex-row items-center gap-2">
                  Fastify
                  <Image
                    src="/icons/fastify.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                  />
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* md以下: シンプル表示 */}
      <div className="mx-auto block w-full max-w-[95vw] p-4 md:hidden">
        <div className="w-full rounded-lg bg-white p-4 shadow-lg">
          <div className="flex flex-row items-center justify-between">
            <h1 className="mb-2 text-2xl font-bold">hoshico</h1>
            <Link href="https://github.com/hoshico">
              <Image
                src="/icons/github.svg"
                alt="Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <p className="text-lg leading-10">東京在住</p>
          <p className="text-lg leading-10">2021年よりエンジニア</p>
          <p className="mb-2 text-lg leading-10">使用技術: </p>
          <ol className="list-inside list-disc pl-5">
            <li className="flex items-center gap-2 text-lg leading-8">
              React{" "}
              <Image src="/icons/react.svg" alt="Logo" width={25} height={25} />
            </li>
            <li className="flex items-center gap-2 text-lg leading-8">
              Next.js{" "}
              <Image src="/icons/next.svg" alt="Logo" width={25} height={25} />
            </li>
            <li className="flex items-center gap-2 text-lg leading-8">
              TypeScript{" "}
              <Image
                src="/icons/typescript.svg"
                alt="Logo"
                width={25}
                height={25}
              />
            </li>
            <li className="flex items-center gap-2 text-lg leading-8">
              Tailwind CSS{" "}
              <Image
                src="/icons/tailwindcss.svg"
                alt="Logo"
                width={25}
                height={25}
              />
            </li>
            <li className="flex items-center gap-2 text-lg leading-8">
              Node.js{" "}
              <Image src="/icons/node.svg" alt="Logo" width={25} height={25} />
            </li>
            <li className="flex items-center gap-2 text-lg leading-8">
              Express{" "}
              <Image
                src="/icons/express.svg"
                alt="Logo"
                width={25}
                height={25}
              />
            </li>
            <li className="flex items-center gap-2 text-lg leading-8">
              Fastify{" "}
              <Image
                src="/icons/fastify.svg"
                alt="Logo"
                width={25}
                height={25}
              />
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
