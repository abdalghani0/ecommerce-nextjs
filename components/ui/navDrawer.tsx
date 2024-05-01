"use client";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";
import {
  GlassesIcon,
  HeartIcon,
  HomeIcon,
  Menu,
  ShoppingBagIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

export default function NavDrawer() {
  const path = usePathname();

  return (
    <Drawer direction="left">
      <DrawerTrigger>
        <div className="md:hidden cursor-pointer text-white flex items-center">
          <Menu />
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-full w-2/3 sm:w-1/2">
        <DrawerHeader className="border-b">
          <DrawerTitle className="text-xl">SwiftCart</DrawerTitle>
        </DrawerHeader>
        <nav className="space-y-3 mt-3">
          <Link
            className={`flex gap-2 hover:bg-gray-100 p-3 justify-center items-center ${path === "/" ? "bg-gray-100" : ""}`}
            href="/"
            onClick={() => document.getElementById("close-drawer").click()}
          >
            <HomeIcon className="h-4 w-4" /> <p>Home</p>
          </Link>
          <Link
            className={`flex gap-2 hover:bg-gray-100 p-3 justify-center items-center ${path === "/clothes" ? "bg-gray-100" : ""}`}
            href="/clothes"
            onClick={() => document.getElementById("close-drawer").click()}
          >
            <UserIcon className="h-4 w-4" /> <p>Clothes</p>
          </Link>
          <Link
            className={`flex gap-2 hover:bg-gray-100 p-3 justify-center items-center ${path === "/Other" ? "bg-gray-100" : ""}`}
            href="/other"
            onClick={() => document.getElementById("close-drawer").click()}
          >
            <GlassesIcon className="h-4 w-4" /> <p>Other</p>
          </Link>
          <Link
            className={`flex gap-2 hover:bg-gray-100 p-3 justify-center items-center ${path === "/cart" ? "bg-gray-100" : ""}`}
            href="/cart"
            onClick={() => document.getElementById("close-drawer").click()}
          >
            <ShoppingBagIcon className="h-4 w-4" /> <p>Cart</p>
          </Link>
          <Link
            className="flex gap-2 hover:bg-gray-100 p-3 justify-center items-center"
            href="#"
            onClick={() => {document.getElementById("close-drawer").click(); toast.info("Coming Soon!")}}
          >
            <HeartIcon className="h-4 w-4" /> <p>Favorites</p>
          </Link>
        </nav>
        <DrawerClose id="close-drawer"></DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
