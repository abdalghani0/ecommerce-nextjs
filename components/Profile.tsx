"use client"
import React from 'react'
import { Button } from './ui/button'
import { HeartIcon, ShoppingBagIcon } from './ui/icons'
import Link from 'next/link'
import { Badge } from './ui/badge'
import UserDropDownMenu from './ui/userDropDownMenu'
import { LoginDialog, SingUpDialog } from './LoginOrSignup'
import { useUser } from '../lib/store/user'

export default function Profile() {
    const { user } = useUser();

    return (
        <div className="flex items-center space-x-1 md:space-x-3">
            <Button className="rounded-full text-white hover:text-gray-700" size="icon" variant="ghost">
                <HeartIcon className="h-4 w-4" />
                <span className="sr-only">View wishlist</span>
            </Button>
            <Link href="/cart">
                <Button className="text-white relative hover:text-gray-700 rounded-full" size="icon" variant="ghost">
                    <ShoppingBagIcon className="h-4 w-4" />
                    <Badge className="absolute rounded-full w-3 h-3 p-2.5 top-0 right-0">1</Badge>
                    <span className="sr-only">View cart</span>
                </Button>
            </Link>

            {user
                ? <UserDropDownMenu user={user} />
                : <LoginOrSignUp />
            }

        </div>
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