import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryProduct = () => {
    const { title, products } = useLoaderData();
    console.log(title, products);
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h1 className='text-center text-3xl text-rose-700 font-bold mb-3'>Here's are the {title} phone.</h1>
            <h1 className='text-center text-2xl text-primary font-bold mb-5'>Select your Desire Phone.</h1>
            <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center pl-4'>
                {
                    products.map((product, i) => <div
                        key={i}
                        className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.photo} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.name}</h2>
                            <p><span className='font-semibold'>Seller Name:</span> {product.seller_name}</p>
                            <p><span className='font-semibold'>Location:</span> {product.location}</p>
                            <p><span className='font-semibold'>Original Price:</span> {product.original_price} taka</p>
                            <p><span className='font-semibold'>Resale Price:</span> {product.resale_price} taka</p>
                            <p><span className='font-semibold'>Post in:</span> {product.post}</p>
                            <p><span className='font-semibold'>Used for:</span> {product.use} years</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryProduct;