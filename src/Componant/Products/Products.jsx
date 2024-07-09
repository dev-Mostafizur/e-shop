import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCart from './ProductsCart';

const Products = () => {
    const getProducts = useLoaderData()
    // console.log(getProducts.products)
    return (
        <div className='grid grid-cols-3 gap-8 mx-10 my-5'>
            {
                getProducts.products ?.map(product=> <ProductsCart key={product.id} product={product}></ProductsCart>)
            }
        </div>
    );
};

export default Products;