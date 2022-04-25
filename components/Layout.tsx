import Link from 'next/link'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, title = 'hoshi-code' }) {
  return (
    
    <div className='bg-gradient-to-br from-primary to-secondary'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}