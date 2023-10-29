'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BsFillBugFill } from 'react-icons/bs'
import classNames from 'classnames'
function NavBar() {
  const currentPath = usePathname()
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
            className={classNames({
              'text-zinc-900': navItem.href === currentPath,
              'text-zinc-500': navItem.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
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
