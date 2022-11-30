import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Wishlist = () => {
    const { user } = useContext(AuthContext);

    const url = `https://e-exchange.vercel.app/wishlist?email=${user?.email}`

    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('resaleToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteWishlist = wish => {
        fetch(`https://e-exchange.vercel.app/wishlist/${wish._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('resaleToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Items Removed')
                }
            })
    };

    return (
        <div>
            <h3 className='text-3xl my-8 text-center'>My Wishlist</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist &&
                            wishlist?.map((wish, i) => <tr
                                key={wish._id}
                                className='hover'>
                                <th>{i + 1}</th>
                                <td>{wish?.productName}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 mask mask-squircle">
                                            <img src={wish?.photo} alt='product' />
                                        </div>
                                    </div>
                                </td>
                                <td>{wish?.price}</td>
                                <td>
                                    <button onClick={() => handleDeleteWishlist(wish)} className='btn btn-xs btn-secondary'>Delete</button>
                                </td>
                            </tr>)
                        };
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wishlist;