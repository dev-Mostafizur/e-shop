import React from 'react';

const ProductsCart = ({product}) => {
    if(!product){
        return null
    }
   const {brand,category,description,images,price} = product
    return (
        <div>
            
        </div>
    );
};

export default ProductsCart;