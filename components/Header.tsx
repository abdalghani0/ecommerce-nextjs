import React from "react";
import NavBar from "./ui/navBar"
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import NavDrawer from "./ui/navDrawer";

export default function Header() {

  return (
    <header className="bg-gradient-to-b from-gray-950 to-gray-900 py-4 md:py-6">
      <div className="container flex items-center justify-between px-4 md:px-9">
        <NavBar />
        <NavDrawer />
        <SearchBar />
        <Profile />
      </div>
    </header>
  )
}
