"use client"
import { GlassesIcon, HomeIcon, UserIcon } from "./icons"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "./dropdown-menu"
import Link from "next/link"
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const path = usePathname();
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="md:hidden cursor-pointer text-white flex items-center">
            <Menu />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Acme Clothing</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            className={path === "/" ? "bg-gray-100" : ""}
            >
            <Link href="/">
              <HomeIcon className="mr-2 h-4 w-4 inline" /> Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className={path === "/clothes" ? "bg-gray-100" : ""}
          >
            <Link href="/clothes">
              <UserIcon className="mr-2 h-4 w-4 inline" /> Clothes
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className={path === "/miscellanious" ? "bg-gray-100" : ""}
          >
            <Link href="/miscellanious">
              <GlassesIcon className="mr-2 h-4 w-4 inline" /> Miscellanious
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }