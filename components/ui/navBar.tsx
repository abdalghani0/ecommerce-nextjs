"use client"
import Link from "next/link";
import { GlassesIcon, HomeIcon, UserIcon } from "./icons";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();
  
    return (
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <Link
            className={`${path === `/`? `bg-white text-gray-700` : ``} hover:bg-white transition-colors p-2 rounded-md flex items-center gap-2 text-gray-100 hover:text-gray-700 dark:text-gray-900 dark:hover:text-gray-900`}
            href="/"
          >
            <HomeIcon className="h-4 w-4" />
            Home
          </Link>
          <Link
            className={`${path === `/clothes`? `bg-white text-gray-700` : ``} hover:bg-white transition-colors p-2 rounded-md flex items-center gap-2 text-gray-100 hover:text-gray-700 dark:text-gray-900 dark:hover:text-gray-900`}
            href="/clothes"
          >
            <UserIcon className="h-4 w-4" />
            Clothes
          </Link>
          <Link
            className={`${path === `/miscellanious`? `bg-white text-gray-700` : ``} hover:bg-white transition-colors p-2 rounded-md flex items-center gap-2 text-gray-100 hover:text-gray-700 dark:text-gray-900 dark:hover:text-gray-900`}            
            href="/miscellanious"
          >
            <GlassesIcon className="h-4 w-4" />
            Miscellanious
          </Link>
        </nav>
      )
}