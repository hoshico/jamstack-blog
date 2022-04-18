import Link from 'next/link'
import Header from './Header'

export default function Layout({ children, title = 'hoshi-code' }) {
  return (
    <div className='bg-gradient-to-br from-primary pb-64 to-secondary'>
      <Header />

      {children}
    </div>
  )
}