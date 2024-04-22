import { Suspense } from "react";
import ClothesProducts from "../../components/ClothesProducts";
import { ProudctsSkeleton } from "../../components/ui/productsSkeleton";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="mb-5 relative">
        <Image
          alt="image"
          src="/clothes.jpg"
          className="w-full object-cover md:aspect-[5/2] lg:aspect-[6/2]"
          width={1444}
          height={400}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white p-4 text-center">
          <h1 className="xs:w-96 md:w-150 font-bold text-3xl md:text-4xl lg:text-5xl">
            Explore Our Collection of Fashion Must-Haves
          </h1>
        </div>
      </div>
      <Suspense fallback={<ProudctsSkeleton />}>
        <ClothesProducts />
      </Suspense>
    </>
  );
}
