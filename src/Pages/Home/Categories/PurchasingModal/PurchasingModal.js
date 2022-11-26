import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';

const PurchasingModal = ({ product, setProduct, refetch }) => {
    const { user } = useContext(AuthContext);
    const { productName, resale_price, photo } = product;
    // console.log(product);
    return (
        <div>
            <input type="checkbox" id="purchasing-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="purchasing-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form className='mt-4 grid gap-4 grid-cols-1'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='resale_price' type="text" defaultValue={resale_price} disabled placeholder="Resale Price" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered border-rose-700 required" />
                        <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered border-rose-700 required" />
                        <input name='photo' type="text" defaultValue={photo} disabled placeholder="Photo" className="input w-0 h-0 input-bordered invisible" />
                        <input className='btn btn-accent w-full bg-gradient-to-r from-rose-400 to-blue-300 text-gray-800' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchasingModal;