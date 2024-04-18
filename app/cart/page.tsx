import CartProducts from "../../components/CartProducts";
import InitCart from "../../lib/store/initCart";
import { supabaseServer } from "../../lib/supabase/server";

export default async function Page() {
    const supabase = await supabaseServer();
    const { data } = await supabase.auth.getSession();
    const cart = await supabase.from("cart").select("*, products(*)").eq("user_id", data?.session?.user?.id);
    
    return (
        <>
            <div className="flex w-full flex-col gap-4">
                <h1 className="text-2xl px-8 pt-4">Cart</h1>
                <p className="px-8">Your cart products</p>
                <CartProducts cart={cart.data!} />
            </div>
            <InitCart cart={cart.data!} />
        </>
    )
}