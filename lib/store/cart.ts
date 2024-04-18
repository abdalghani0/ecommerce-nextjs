import { create } from 'zustand';
import { product } from './products';

export type cartProduct = {
    id: string
    user_id: string
    product_id: string
    products: product
    quantity: number
}

interface CartState {
    cart: cartProduct[] | undefined;
    cartLength: number | undefined;
    setCartLength: (num: number | undefined) => void;
    addToCart: (cartProduct: cartProduct) => void;
    updateCartProduct: (cartProduct: cartProduct) => void;
}

export const useCart = create<CartState>()((set) => ({
    cart: undefined,
    cartLength: undefined,
    setCartLength: (num) => set(() => ({
        cartLength: num
    })) ,
    addToCart: (cartProduct) => set((state) => ({
        cart: [...state.cart, cartProduct]
    })),
    updateCartProduct: (cartProduct) => set((state) => ({
        cart: state.cart.filter((c) => {
            if (c.id === cartProduct.id)
                return cartProduct;
            return c;
        })
    }))
}))