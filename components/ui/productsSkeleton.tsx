import ProductSkeleton from "./productSkeleton";

export function ProudctsSkeleton() {
    return(
        <div className="grid py-4 px-12 w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
        </div>
    )
}