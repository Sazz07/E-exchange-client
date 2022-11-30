import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';


const Products = ({ cate, setProduct }) => {
    const { user } = useContext(AuthContext);
    const { productName, photo, location, original_price, resale_price, seller_name, years_use, purchase_year, verify, description, condition, sellerPhone, _id, categoryName } = cate;


    const handleWishList = (id) => {
        const wishData = {
            userName: user?.displayName,
            email: user?.email,
            productId: id,
            productName,
            photo,
            categoryName,
            price: resale_price
        };

        fetch("https://e-exchange.vercel.app/wishlist", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('resaleToken')}`
            },
            body: JSON.stringify(wishData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success("Added to Wishlist");
                }
                else {
                    toast.error(data.message);
                }
            });
    };

    return (
        <div>
            <div
                className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photo} alt="product" className="rounded-xl" />
                </figure>
                <div className="card-body  pt-10">
                    <h2 className="card-title">{productName}</h2>
                    <div className='flex justify-end'>
                        <p><span className='font-semibold'>Seller Name:</span> {seller_name}</p>
                        {
                            verify &&
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-blue-500 w-5 h-6 font-bold">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        }
                    </div>
                    <p><span className='font-semibold'>Description:</span> {description}.</p>
                    <p><span className='font-semibold'>Location:</span> {location}.</p>
                    <p><span className='font-semibold'>Condition:</span> {condition}.</p>
                    <p><span className='font-semibold'>Original Price:</span> {original_price} taka</p>
                    <p><span className='font-semibold'>Resale Price:</span> {resale_price} taka</p>
                    <p><span className='font-semibold'>Purchase Year:</span> {purchase_year}</p>
                    <p><span className='font-semibold'>Used for:</span> {years_use} years</p>
                    <p><span className='font-semibold'>Contact:</span> {sellerPhone}</p>
                    <div className="card-actions">
                        <label
                            onClick={() => setProduct(cate)}
                            htmlFor="purchasing-modal"
                            className="btn btn-primary">Purchase Now
                        </label>
                        <button
                            onClick={() => handleWishList(_id)}
                            className='btn btn-outline btn-secondary'>Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;