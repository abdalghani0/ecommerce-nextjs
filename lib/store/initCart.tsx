"use client";

import React, { useEffect, useRef } from 'react';
import { cartProduct, useCart } from './cart';

function InitCart({cart} : { cart : cartProduct[] | undefined }) {
    const initState = useRef(false);

    useEffect(() => {
        if(!initState.current) {
            useCart.setState({ cart });
        }
        initState.current = true;
    },[])

    return <></>
}

export default InitCart;