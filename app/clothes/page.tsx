import { Suspense } from "react";
import ClothesProducts from "../../components/ClothesProducts";
import { ProudctsSkeleton } from "../../components/ui/productsSkeleton";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="mb-5">
        <Image
            alt="image"
            src="/hero.jpg"
            className="w-full object-cover md:aspect-[4.5/2]"
            width={1444}
            height={400}
        />
      </div>
      <Suspense fallback={<ProudctsSkeleton />}>
        <ClothesProducts />
      </Suspense>
    </>
  );
}
