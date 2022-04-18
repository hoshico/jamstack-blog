import Link from 'next/link'
import Header from './Header'

export default function Main({children}) {

  return (
    <div className="w-4/5 bg-base-200 my-4 rounded m-auto">
      <div className="mx-10 my-10">
        {children}
      </div>
    </div>
  )
}