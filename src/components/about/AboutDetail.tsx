import Image from "next/image";
import Link from "next/link";

type Skill = {
  name: string;
  icon: string;
  height: number;
  front: string;
  side: string;
  top: string;
};

const skills: Skill[] = [
  {
    name: "React",
    icon: "/icons/react.svg",
    height: 210,
    front: "from-blue-300 to-blue-500",
    side: "bg-blue-700",
    top: "bg-blue-200",
  },
  {
    name: "Next.js",
    icon: "/icons/next.svg",
    height: 210,
    front: "from-blue-400 to-blue-600",
    side: "bg-blue-800",
    top: "bg-blue-300",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
    height: 210,
    front: "from-indigo-400 to-indigo-600",
    side: "bg-indigo-800",
    top: "bg-indigo-300",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss.svg",
    height: 210,
    front: "from-violet-400 to-violet-600",
    side: "bg-violet-800",
    top: "bg-violet-300",
  },
  {
    name: "Node.js",
    icon: "/icons/node.svg",
    height: 130,
    front: "from-purple-400 to-purple-600",
    side: "bg-purple-800",
    top: "bg-purple-300",
  },
  {
    name: "Express",
    icon: "/icons/express.svg",
    height: 130,
    front: "from-fuchsia-400 to-fuchsia-600",
    side: "bg-fuchsia-800",
    top: "bg-fuchsia-300",
  },
  {
    name: "Fastify",
    icon: "/icons/fastify.svg",
    height: 72,
    front: "from-pink-400 to-pink-500",
    side: "bg-pink-700",
    top: "bg-pink-300",
  },
];

export default function AboutDetail() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">hoshico</h1>
          <p className="mt-3 text-lg leading-8 text-gray-500">東京在住</p>
          <p className="text-lg leading-8 text-gray-500">
            デブ猫が好き
          </p>
        </div>
        <Link
          href="https://github.com/hoshico"
          aria-label="GitHub"
          className="shrink-0"
        >
          <Image src="/icons/github.svg" alt="" width={40} height={40} />
        </Link>
      </div>

      <section className="relative overflow-hidden rounded-3xl bg-[#0b1220] px-4 pt-8 pb-12 shadow-2xl sm:px-8 sm:pt-10 sm:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-[-10%] bottom-0 h-56 origin-bottom opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.16) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            transform: "perspective(500px) rotateX(68deg)",
            maskImage: "linear-gradient(to top, black 20%, transparent 85%)",
          }}
        />

        <div className="relative">
          <h2 className="text-lg font-semibold text-white">SKILLS</h2>

          <div className="skill-chart mt-2 overflow-x-auto px-6 pt-24 pb-14 sm:px-8 sm:pt-28">
            <ul className="skill-chart-stage mx-auto flex w-max items-end gap-4 sm:gap-6">
              {skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex w-[2.75rem] min-w-[2.75rem] max-w-[2.75rem] shrink-0 flex-col items-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="skill-bar relative"
                    style={{ ["--h" as string]: `${skill.height}px` }}
                  >
                    <div
                      className={`skill-bar-face skill-bar-top ${skill.top}`}
                    />
                    <div
                      className={`skill-bar-face skill-bar-side ${skill.side}`}
                    />
                    <div
                      className={`skill-bar-face skill-bar-front bg-linear-to-b ${skill.front}`}
                    />
                  </div>
                  <div className="skill-bar-label mt-6 flex w-full min-w-0 flex-col items-center gap-1.5">
                    <span className="flex size-8 items-center justify-center rounded-full bg-white shadow-sm">
                      <Image src={skill.icon} alt="" width={18} height={18} />
                    </span>
                    <span className="min-w-0 whitespace-nowrap text-center text-[11px] leading-tight text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
