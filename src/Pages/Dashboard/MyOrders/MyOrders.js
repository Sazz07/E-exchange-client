import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `https://e-exchange.vercel.app/orders?email=${user?.email}`

    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders'],
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

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-3xl my-8 text-center'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders &&
                            orders?.map((order, i) => <tr
                                key={order._id}
                                className='hover'>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 mask mask-squircle">
                                        <img src={order?.photo} alt='product' />
                                    </div>
                                </div></td>
                                <td>{order?.productName}</td>
                                <td>{order?.price}</td>
                                <td>
                                    {
                                        order?.price && !order?.paid && <Link
                                            to={`/dashboard/payment/${order?._id}`}
                                        >
                                            <button className='btn btn-xs btn-secondary font-bold'>PAY</button>
                                        </Link>
                                    }
                                    {
                                        order?.price && order?.paid && <button
                                            className='btn btn-xs font-bold disabled:'
                                        >Paid</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;