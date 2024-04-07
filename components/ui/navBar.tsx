"use client"
import Link from "next/link";
import { GlassesIcon, HomeIcon, UserIcon } from "./icons";
import { useState } from "react";

export default function NavBar() {
  const [current, setCurrent] = useState("");
    return (
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <Link
            className={`${current === `home`? `bg-white text-gray-700` : ``} hover:bg-white transition-colors p-2 rounded-md flex items-center gap-2 text-gray-100 hover:text-gray-700 dark:text-gray-900 dark:hover:text-gray-900`}
            href="/"
            onClick={() => setCurrent("home")}
          >
            <HomeIcon className="h-4 w-4" />
            Home
          </Link>
          <Link
            className={`${current === `clothes`? `bg-white text-gray-700` : ``} hover:bg-white transition-colors p-2 rounded-md flex items-center gap-2 text-gray-100 hover:text-gray-700 dark:text-gray-900 dark:hover:text-gray-900`}
            href="/clothes"
            onClick={() => setCurrent("clothes")}
          >
            <UserIcon className="h-4 w-4" />
            Clothes
          </Link>
          <Link
            className={`${current === `miscellanious`? `bg-white text-gray-700` : ``} hover:bg-white transition-colors p-2 rounded-md flex items-center gap-2 text-gray-100 hover:text-gray-700 dark:text-gray-900 dark:hover:text-gray-900`}            
            href="/miscellanious"
            onClick={() => setCurrent("miscellanious")}
          >
            <GlassesIcon className="h-4 w-4" />
            Miscellanious
          </Link>
        </nav>
      )
}