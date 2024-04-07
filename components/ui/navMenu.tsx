"use client"
import { GlassesIcon, HomeIcon, UserIcon } from "./icons"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "./dropdown-menu"
import Link from "next/link"
import { useState } from "react";

export default function NavMenu() {
  const [current, setCurrent] = useState("");
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="md:hidden cursor-pointer rounded-full bg-white p-1 flex items-center gap-2 text-gray-100 hover:text-gray-50 dark:text-gray-900 dark:hover:text-gray-900">
            <img
              alt="Logo"
              height="50"
              src="logo.png"
              
              width="50"
              className="rounded-full"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Acme Clothing</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            className={current === "home" ? "bg-gray-100" : ""}
            onClick={() => setCurrent("home")}
            >
            <Link href="/">
              <HomeIcon className="mr-2 h-4 w-4 inline" /> Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className={current === "clothes" ? "bg-gray-100" : ""}
            onClick={() => setCurrent("clothes")}
          >
            <Link href="/clothes">
              <UserIcon className="mr-2 h-4 w-4 inline" /> Clothes
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className={current === "miscellanious" ? "bg-gray-100" : ""}
            onClick={() => setCurrent("miscellanious")}
          >
            <Link href="/miscellanious">
              <GlassesIcon className="mr-2 h-4 w-4 inline" /> Miscellanious
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }