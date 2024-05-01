"use client";
import React from "react";
import { Button } from "./ui/button";
import { HeartIcon, ShoppingBagIcon } from "./ui/icons";
import Link from "next/link";
import { Badge } from "./ui/badge";
import UserDropDownMenu from "./ui/userDropDownMenu";
import { LoginDialog } from "./LoginDialog";
import { useUser } from "../lib/store/user";
import { useCart } from "../lib/store/cart";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

export default function Profile() {
  const { user } = useUser();
  const { cart } = useCart();
  const path = usePathname();

  return (
    <div className="flex items-center space-x-1 md:space-x-3">
      <Link href="#" className="max-md:hidden">
        <Button
          className="rounded-full text-white hover:text-gray-700"
          size="icon"
          variant="ghost"
          onClick={() => toast.info("Coming Soon!")}
        >
          <HeartIcon className="h-4 w-4" />
          <span className="sr-only">View wishlist</span>
        </Button>
      </Link>
      <Link href="/cart" className="max-md:hidden">
        <Button
          className={`text-white ${
            path === `/cart` ? `bg-white text-gray-700` : ``
          } relative hover:text-gray-700 rounded-full`}
          size="icon"
          variant="ghost"
        >
          <ShoppingBagIcon className="h-4 w-4" />
          {cart ? (
            <Badge
              variant="secondary"
              className="flex justify-center items-center absolute rounded-full w-2 h-2 p-2 bottom-0 right-0"
            >
              <span className="ml-[1px]">{cart?.length}</span>
            </Badge>
          ) : null}
          <span className="sr-only">View cart</span>
        </Button>
      </Link>

      {user ? <UserDropDownMenu user={user} /> : <LoginDialog />}
    </div>
  );
}
