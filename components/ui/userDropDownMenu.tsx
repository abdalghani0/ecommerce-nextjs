"use client"
import { useRouter } from "next/navigation"
import { supabaseBrowser } from "../../lib/supabase/browser"
import { Button } from "./button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "./dropdown-menu"
import { ArchiveIcon, LogOutIcon, SettingsIcon, UserIcon } from "./icons"
import { useUser } from "../../lib/store/user"
import { User } from "@supabase/supabase-js"

export default async function UserDropDownMenu({user} : {user: User}) {
  const router = useRouter();
  const supabase = supabaseBrowser();
  const { data } = await supabase.from("users").select("*").eq("id", user?.id!).single();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" size="icon" variant="ghost">
          <img
            alt="Avatar"
            className="rounded-full"
            height="32"
            src={data?.avatar_url}
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
          />
          <span className="sr-only">Toggle user menu</span>
        </Button>
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