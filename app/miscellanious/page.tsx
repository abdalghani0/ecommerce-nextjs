import { Suspense } from "react";
import { ProudctsSkeleton } from "../../components/ui/productsSkeleton";
import OtherProducts from "../../components/OtherProducts";

export default function Page() {
    return(
        <Suspense fallback={<ProudctsSkeleton />}>
            <OtherProducts />
        </Suspense>
        
    )
}