"use client"
import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./ui/icons";

export default function Footer() {
  return (
    <footer className="grid gap-4 w-full py-8 md:py-12 px-4 text-sm text-gray-500 bg-gray-100/40 dark:text-gray-400 dark:bg-gray-800/40">
      <div className="container grid md:grid-cols-3 md:items-start md:gap-6">
        <div className="space-y-4">
          <Link className="font-semibold" href="#">
            Ecommerce
          </Link>
          <p className="text-sm/relaxed text-wrap">
            The best online destination for stylish and affordable clothing. Shop the latest trends for men and women.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <Link className="hover:underline" href="#">
            Terms & Conditions
          </Link>
          <Link className="hover:underline" href="#">
            Privacy Policy
          </Link>
          <Link className="hover:underline" href="#">
            Shipping & Returns
          </Link>
          <Link className="hover:underline" href="#">
            Contact Us
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold">Connect with Us</h3>
          <div className="flex items-center gap-2">
            <FacebookIcon className="h-4 w-4" />
            <Link className="hover:underline" href="#">
              Facebook
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <TwitterIcon className="h-4 w-4" />
            <Link className="hover:underline" href="#">
              Twitter
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <InstagramIcon className="h-4 w-4" />
            <Link className="hover:underline" href="#">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="container grid md:grid-cols-2 md:items-center md:gap-6">
        <p className="text-center md:text-left">© 2024 Ecommerce. All rights reserved.</p>
        <nav className="flex justify-center space-x-4 md:justify-end">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/clothes">
            Clothes
          </Link>
          <Link className="hover:underline" href="/miscellanious">
            Miscellanious
          </Link>
        </nav>
      </div>
    </footer>
  )
}