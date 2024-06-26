"use client"
import { supabaseBrowser } from "../../lib/supabase/browser"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "./dropdown-menu"
import { ArchiveIcon, LogOutIcon, SettingsIcon, UserIcon } from "./icons"
import { User } from "@supabase/supabase-js"
import Image from "next/image"

export default function UserDropDownMenu({user} : {user: User}) {

  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="hover:bg-accent cursor-pointer flex justify-center h-9 w-9 rounded-full transition-colors">
          <Image
            alt="Avatar"
            className="rounded-full w-full"
            height="32"
            src={user?.user_metadata.avatar_url}
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
          />
          <span className="sr-only">Toggle user menu</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Hi, {user?.user_metadata.user_name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ArchiveIcon className="mr-2 h-4 w-4" />
          Orders
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleLogout()}>
          <LogOutIcon className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}