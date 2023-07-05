"use client"

import { usePathname } from "next/navigation"

const navigationRight = [
  { name: 'home', href: '/' },
  { name: 'play', href: '/play' },
  { name: 'inventory', href: '/inventory' },
  { name: 'watch', href: '/watch' },
]

const navigationLeft = [
  { name: 'shop', href: '/shop' },
  { name: 'awards', href: '/awards' },
  { name: 'options', href: '/options' },
  { name: 'logout', href: '/logout' },
]

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className="backdrop-blur-md bg-white/30 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-evenly p-1" aria-label="Global">
        <div className="flex">
          <div className="flex-1 flex">
            {navigationRight.map((item) => (
              <a key={item.name} href={item.href} className={`flex-1 w-32 text-center text-sm font-semibold leading-6 text-gray-900 px-4 py-3 uppercase ${pathname === item.href ? 'bg-gray-200' : '' }`}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <a href="#" className="-m-1.5 p-1.5 flex-1 flex justify-center">
          <span className="sr-only">Your Company</span>
          <img className="w-[130px] h-auto" src="/logo.png" alt="" />
        </a>
        <div className="flex-1 flex">
          <div className="flex-1 flex">
            {navigationLeft.map((item) => (
              <a key={item.name} href={item.href} className={`flex-1 w-32 text-center text-sm font-semibold leading-6 text-gray-900 px-4 py-3 uppercase ${pathname === item.href ? 'bg-gray-200' : '' }`}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
