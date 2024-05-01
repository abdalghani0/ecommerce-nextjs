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
    deleteCartProduct: (removedProduct: cartProduct) => void;
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
    deleteCartProduct: (removedProduct) => set((state) => ({
        cart: state.cart.filter((product) => (product.id !== removedProduct.id))
    })),
    updateCartProduct: (cartProduct) => set((state) => ({
        cart: state.cart.map((product) => {
            if(product.id === cartProduct.id)
                return cartProduct;
            return product;
        })
    }))
}))