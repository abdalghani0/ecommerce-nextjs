import { Suspense } from "react";
import { ProudctsSkeleton } from "../../components/ui/productsSkeleton";
import OtherProducts from "../../components/OtherProducts";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="mb-5 relative">
        <Image
          alt="miscellanios"
          src="/miscellanious.jpg"
          className="w-full object-cover md:aspect-[4.5/2]"
          width={1444}
          height={400}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white p-4 text-center">
          <h1 className="xs:w-96 md:w-150 font-bold text-4xl md:text-5xl lg:text-6xl">
            Shop Cutting-Edge Gadgets and Devices
          </h1>
        </div>
      </div>
      <Suspense fallback={<ProudctsSkeleton />}>
        <OtherProducts />
      </Suspense>
    </>
  );
}
