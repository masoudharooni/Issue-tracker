import Link from 'next/link'
import React from 'react'
import { BsFillBugFill } from 'react-icons/bs'
function NavBar() {
  const navItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ]
  return (
    <nav className="flex items-center h-14 px-5 gap-x-5 border-b mb-5">
      <Link href="/">
        <BsFillBugFill />
      </Link>
      <ul className="flex gap-x-5">
        {navItems.map(navItem => (
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
            key={navItem.href}
            href={navItem.href}
          >
            <li>{navItem.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
