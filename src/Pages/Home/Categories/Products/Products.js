import React from 'react';

const Products = ({ cate, setProduct }) => {
    // console.log(cate);
    const {productName, photo, location, original_price, post, resale_price, seller_name, verified, use } = cate;
    return (
        <div>
            <div
                className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="product" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center pt-10">
                    <h2 className="card-title">{productName}</h2>
                    <p><span className='font-semibold'>Seller Name:</span> {seller_name}</p>
                    <p><span className='font-semibold'>Location:</span> {location}</p>
                    <p><span className='font-semibold'>Original Price:</span> {original_price} taka</p>
                    <p><span className='font-semibold'>Resale Price:</span> {resale_price} taka</p>
                    <p><span className='font-semibold'>Post in:</span> {post}</p>
                    <p><span className='font-semibold'>Used for:</span> {use} years</p>
                    <div className="card-actions">
                        <label 
                        onClick={() => setProduct(cate)}
                        htmlFor="purchasing-modal" 
                        className="btn btn-primary">open modal</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;