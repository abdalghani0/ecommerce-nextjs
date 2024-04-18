"use client";

import React, { useEffect, useRef } from 'react';
import { product, useProducts } from './products';

function InitProducts({products} : { products : product[] | undefined }) {
    const initState = useRef(false);

    useEffect(() => {
        if(!initState.current) {
            useProducts.setState({ products });
        }
        initState.current = true;
    },[])

    return <></>
}

export default InitProducts;