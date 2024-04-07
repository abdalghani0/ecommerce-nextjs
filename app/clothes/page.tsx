import { Suspense } from "react";
import ClothesProducts from "../../components/ClothesProducts";
import { ProudctsSkeleton } from "../../components/ui/productsSkeleton";

export default function Page() {
    return(
        <Suspense fallback={<ProudctsSkeleton />}>
            <ClothesProducts />
        </Suspense>
        
    )
}

