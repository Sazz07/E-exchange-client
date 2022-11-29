import React from 'react';

const AdvertiseCard = ({ product }) => {
    const { photo, productName, description, resale_price, location, condition } = product;
    console.log(product);
    return (
        <div className="card w-96 shadow-xl image-full">
            <figure><img src={photo} alt="phone" /></figure>
            <div className="card-body">
                <div className="card-actions">
                <div> 
                <h2 className="card-title text-2xl font-bold">{productName}</h2>
                    <p className='pb-28'>{description.slice(0, 70)}...</p>
                    <p><span className='font-bold'>Price:</span>  {resale_price} bdt.</p>
                    <p><span className='font-bold'>Location:</span>  {location}.</p>
                    <p><span className='font-bold'>Condition:</span>  {condition}.</p>
                </div> 
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;