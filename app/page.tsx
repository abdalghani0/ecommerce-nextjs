import React, { Suspense } from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import ProductSkeleton from "../components/ui/productSkeleton";
import Link from "next/link";

export default function Page() {

  return (
    <main className="flex-1">
      <div className="grid gap-4 md:gap-6 lg:gap-8">
        <Hero />
        <section className="container mb-6 grid items-start gap-4 px-4 md:grid-cols-2 md:items-center md:gap-10 md:px-6 lg:gap-16">
          <div className="flex-col items-center justify-center space-y-4 md:order-1 md:justify-start md:space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Introducing our most popular items. Shop the best of the season.
              </p>
            </div>
            <Link
              className="inline-flex items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 h-10 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              View all products
            </Link>
          </div>
          <Suspense fallback={<FeaturedProductsSkeleton />}>
            <FeaturedProducts />
          </Suspense>
        </section>
      </div>
    </main>
  )
}

function FeaturedProductsSkeleton() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3 md:gap-6">
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
      <ProductSkeleton />
    </div>
  )
}


