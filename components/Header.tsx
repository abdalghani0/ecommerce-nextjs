import { HeartIcon, SearchIcon, ShoppingBagIcon } from "./ui/icons"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { User } from "@supabase/supabase-js"
import React from "react";
import NavMenu from "./ui/navMenu"
import UserDropDownMenu from "./ui/userDropDownMenu"
import NavBar from "./ui/navBar"
import { LoginDialog, SingUpDialog } from "./LoginOrSignup";

export default function Header({ user }: { user: User | undefined }) {

  return (
    <header className="bg-gradient-to-b from-gray-950 to-gray-900 py-4 md:py-6">
      <div className="container flex items-center justify-between px-4 md:px-9">
        <NavBar />
        <NavMenu />
        <form className="hidden md:flex items-center gap-4 ml-auto">
          <SearchIcon className="h-4 w-4 cursor-pointer text-gray-100 dark:text-gray-900" />
          <Input
            className="w-[200px] border-0 focus:border bg-gray-900/80 placeholder-gray-100/40 rounded-lg text-gray-100 appearance-none"
            placeholder="Search for items..."
            type="search"
          />
        </form>
        <div className="flex items-center space-x-3">
          <Button className="rounded-full text-white hover:text-gray-700" size="icon" variant="ghost">
            <HeartIcon className="h-4 w-4" />
            <span className="sr-only">View wishlist</span>
          </Button>
          <Button className="text-white hover:text-gray-700 rounded-full" size="icon" variant="ghost">
            <ShoppingBagIcon className="h-4 w-4" />
            <span className="sr-only">View cart</span>
          </Button>
          {user
            ? <UserDropDownMenu user={user} />
            : <LoginOrSignUp />
          }

        </div>
      </div>
    </header>
  )
}

function LoginOrSignUp() {

  return (
    <>
      <SingUpDialog />
      <LoginDialog />
    </>
  )
}

