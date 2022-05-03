/* eslint-disable tailwindcss/no-custom-classname */
type Toc = {
  text: string;
  id: string;
};
type TocProps = {
  toc: Array<Toc>;
}
export default function TableOfContents({toc}: TocProps) {
  return (
    <div className="hidden sticky top-10 py-10 px-2 w-[250px] h-[fit-content] rounded-xl shadow md:block bg-base-100">
      <p className="pl-2 mb-5 font-bold">目次</p>
      <ul className="pl-6 list-disc">
        {toc.map(data => (
          <li className="mb-2 font-bold opacity-70 hover:opacity-100" key={data.id}>
            <a href={`#${data.id}`}>
              {data.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
