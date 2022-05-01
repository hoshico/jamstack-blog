
export default function TableOfContents({toc}) {

  return (
    <div className="sticky top-10 bg-base-100 py-10 px-2 w-[250px] h-[fit-content] shadow rounded-xl hidden md:block">
      <p className="font-bold mb-5 pl-2">目次</p>
      <ul className="list-disc pl-6">
        {toc.map(data => (
          <li className="font-bold mb-2 opacity-70 hover:opacity-100" key={data.id}>
            <a href={`#${data.id}`}>
              {data.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
