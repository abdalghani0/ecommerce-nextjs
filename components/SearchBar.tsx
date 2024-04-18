"use client"
import React from 'react'
import { SearchIcon } from './ui/icons'
import { Input } from './ui/input'

export default function SearchBar() {
  return (
    <>
        <form className="flex items-center gap-2 md:gap-4 mr-auto ml-2 md:mr-4 md:ml-auto">
          <SearchIcon className="h-4 w-4 cursor-pointer text-gray-100 dark:text-gray-900" />
          <Input
            className="md:w-[200px] w-[130px] border-0 focus:border bg-gray-900/80 placeholder-gray-100/40 text-xs rounded-lg text-gray-100 appearance-none"
            placeholder="Search for items..."
            type="search"
          />
        </form>
    </>
  )
}
