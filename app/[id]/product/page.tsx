"use client"
import { Button } from "../../../components/ui/button";
import { ShoppingBagIcon } from "../../../components/ui/icons";
import { Input } from "../../../components/ui/input";
import { supabaseBrowser } from "../../../lib/supabase/browser";
import NotFound from "./not-found";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const supabase = supabaseBrowser();
    const {error, data} = await supabase.from("products").select("*").eq("id", id).single();
    if(error){
        return(
            <NotFound />
        )
    }
    return(
        <div className="flex-col justify-center md:flex-row flex items-center gap-5 lg:gap-20 py-5 md:py-10 lg:px-20 h-full">
            <div className="w-sm h-sm shrink-0">
                <img 
                    alt="product image"
                    src={data.image_url}
                    className="object-center w-[250px] md:max-w-[350px] max-h-[400px]"
                />
            </div>
            <div className="p-4 max-w-2xl flex flex-col space-y-3 md:space-y-5">
                <h1 className="font-bold text-xl">{data.title}</h1>
                <p className="mb-3">{data.description}</p>
                <p className="flex items-center gap-3">
                    <span className="font-bold">Select a quantity:</span> <Input min="1" defaultValue="1" className="p-1 w-20" type="number" />
                </p>
                <p className="font-medium space-x-2">
                    <span className="font-bold">Price:</span> <span>${data.price}</span>
                </p>
                <Button className="w-1/2 self-center"><ShoppingBagIcon className="w-4 h-4 mr-3" /> Add to cart</Button>
            </div>
        </div>
    )
}