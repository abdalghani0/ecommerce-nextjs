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
        <DropdownMenuContent className="text-sm">
          <DropdownMenuLabel>Acme Clothing</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            className={path === "/" ? "bg-gray-100" : ""}
            >
            <Link className="flex gap-2" href="/">
              <HomeIcon className="h-4 w-4" /> <span>Home</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className={path === "/clothes" ? "bg-gray-100" : ""}
          >
            <Link className="flex gap-2" href="/clothes">
              <UserIcon className="h-4 w-4" /> <span>Clothes</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className={path === "/miscellanious" ? "bg-gray-100" : ""}
          >
            <Link className="flex gap-2" href="/miscellanious">
              <GlassesIcon className="h-4 w-4" /> <span>Other</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }