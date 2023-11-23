import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
    <div className="navbar mt-10">
    <ul className="font-bold flex space-x-20 items-center justify-center">
    <Link href="/"><li>Home</li></Link>
    <Link href="about"><li>About</li></Link>
    <Link href="blog"><li>Blog</li></Link>
    <Link href="contact"><li>Contact</li></Link>
    </ul>
    </div>
  </nav>
  )
}

export default Navbar