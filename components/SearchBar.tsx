"use client";
import React, { useState } from "react";
import { SearchIcon } from "./ui/icons";
import { Input } from "./ui/input";
import { usePathname } from "next/navigation";
import { product } from "../lib/store/products";
import { supabaseBrowser } from "../lib/supabase/browser";
import { toast } from "sonner";
import Image from "next/image";
import debounce from "debounce";
import { type } from "os";
import Link from "next/link";

export default function SearchBar() {
  const path = usePathname();
  const [searchResults, setSearchResults] = useState<product[] | undefined>();
  const [showSuggestions, setShowSuggestions] = useState(false); // State to control visibility of suggestions
  const [text, setText] = useState("");

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = e.currentTarget.value;
    setText(t);
    if (t) {
      const supabase = supabaseBrowser();
      const { data, error } = await supabase
        .rpc("search_products_by_title", { prefix: t.replaceAll(" ", "+") })
        .limit(6);
      if (error) toast.error(error.message);
      setSearchResults(data);
      setShowSuggestions(true); // Show suggestions when search results are available
    } else {
      setSearchResults(undefined);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = () => {
    setShowSuggestions(false); // Hide suggestions after selection
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex relative items-center gap-2 md:gap-4 mr-auto ml-2 md:mr-4 md:ml-auto">
      <SearchIcon className="h-4 w-4 cursor-pointer text-gray-100 dark:text-gray-900" />
      <Input
        className="md:w-[200px] w-[130px] border-0 focus:border bg-gray-900/80 placeholder-gray-100/40 text-xs rounded-lg text-gray-100 appearance-none"
        placeholder="Search for items..."
        type="search"
        value={text}
        onChange={(e) => handleSearch(e)}
      />
      {showSuggestions && searchResults && text && (
        <div className="absolute top-9 z-10 mt-1 w-full bg-white rounded-lg shadow-xl">
          {searchResults.map((result) => (
            <Link
              href={`/${result.id}/product`}
              key={result.id}
              className="flex gap-2 p-2 cursor-pointer rounded-lg hover:bg-gray-100"
              onClick={() => handleSelectSuggestion()}
            >
              <Image
                alt="product image"
                className="object-contain"
                src={result.image_url}
                width={50}
                height={50}
              />
              <p className="text-sm line-clamp-2 md:line-clamp-3">
                {result.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </form>
  );
}
