import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Wishlist = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/wishlist?email=${user?.email}`

    const { data: wishlist = [] } = useQuery({
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
                                    <Link
                                            to={`/category/${wish?._id}`}
                                        >
                                            <button className='btn btn-xs btn-secondary font-bold'>PAY</button>
                                        </Link>
                                    
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