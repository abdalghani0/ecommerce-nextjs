import { create } from 'zustand';

export type product = {
    category: string
    count: number
    description: string
    id: string
    image_url: string
    price: number
    rate: number
    title: string
}

interface ProductsState {
    products: product[] | undefined 
}

export const useProducts = create<ProductsState>()((set) => ({
    products: undefined,
}))