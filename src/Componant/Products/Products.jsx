import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCart from './ProductsCart';

const Products = () => {
    const getProducts = useLoaderData()
    console.log(getProducts.products)
    return (
        <div>
            {
                getProducts.products ?.map(product=> <ProductsCart key={product.id} product={product}></ProductsCart>)
            }
        </div>
    );
};

export default Products;