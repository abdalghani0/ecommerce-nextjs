import NotFound from "./not-found";
import ProductPreview from "../../../components/ProductPreview";
import { supabaseServer } from "../../../lib/supabase/server";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const supabase = await supabaseServer();
    const product = await supabase.from("products").select("*").eq("id", id).single();
    if(product.error){
        return(
            <NotFound />
        )
    }
    return(
        <ProductPreview product={product.data} />
    )

}