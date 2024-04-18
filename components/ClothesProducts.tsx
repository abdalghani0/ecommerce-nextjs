import { supabaseServer } from "../lib/supabase/server";
import Product from "./Product";

export default async function ClothesProducts() {
    const supabase = await supabaseServer();
    const {data, error} = await supabase.from("products").select("*").in("category", ["men's clothing", "women's clothing"]);
    if(error)
        console.log(error.message)
    return(
        <div className="grid py-4 md:px-12 px-8 w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {
                data?.map((product) => {
                    return (
                        <Product key={product.id} product={product} />
                    )
                })
            }
      </div>
    )
}