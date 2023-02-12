/* eslint-disable tailwindcss/no-custom-classname */
type Toc = {
  text: string;
  id: string;
};
type TocProps = {
  toc: Array<Toc>;
};
export default function TableOfContents({ toc }: TocProps) {
  return (
    <div className="sticky top-10 hidden h-[fit-content] w-[250px] rounded-xl bg-base-100 py-10 px-2 shadow md:block">
      <p className="mb-5 pl-2 font-bold">目次</p>
      <ul className="list-disc pl-6">
        {toc.map((data) => (
          <li
            className="mb-2 list-none font-bold opacity-70 hover:opacity-100"
            key={data.id}
          >
            <a href={`#${data.id}`}>{data.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
