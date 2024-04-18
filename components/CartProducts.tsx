import React from 'react'
import CartProduct from './CartProduct'
import { cartProduct } from '../lib/store/cart'

export default function CartProducts({cart} : { cart : cartProduct[] | undefined}) {

    return (
        <>
            {
                cart?.map((cartProduct) => {
                    return (
                        <CartProduct key={cartProduct.id} cartProduct={cartProduct} />
                    )
                })
            }
            
        </>
    )
}
