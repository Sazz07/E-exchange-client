import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';

const PurchasingModal = ({ product, setProduct, refetch }) => {
    const { user } = useContext(AuthContext);
    const { productName, resale_price, photo } = product;
    console.log(product);
    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meetingLocation = form.location.value;
        const photo = form.photo.value;
        const price = form.price.value;

        const order = {
            productName,
            userName: name,
            email,
            phone,
            price,
            meetingLocation
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success('Order Confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            });
    };

    return (
        <div>
            <input type="checkbox" id="purchasing-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="purchasing-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productName}</h3>
                    <form
                        onSubmit={handleOrder}
                        className='mt-4 grid gap-4 grid-cols-1'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='price' type="text" defaultValue={resale_price} disabled placeholder="Resale Price" className="input w-full input-bordered" />
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