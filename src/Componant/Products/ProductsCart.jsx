import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCart = ({product}) => {
    if(!product){
        return null
    }
   const {brand,category,description,images,price,title,id} = product
    return (
        <div>
            

<div className=" w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg h-52 w-full"  src={images[0]} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <div className="flex items-center mt-3 mb-5 justify-between">
           <p>{brand}</p>
          
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div className="flex items-center justify-between ">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
            <Link to={`/products/${id}`}>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</button>
            </Link>
        </div>
    </div>
</div>

        </div>
    );
};

export default ProductsCart;