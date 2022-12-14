import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `https://e-exchange.vercel.app/products/myproducts?email=${user?.email}`;
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    });

    

    const handleAdvertising = id => {
        fetch(`https://e-exchange.vercel.app/products/advertise/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('resaleToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Advertised Successfully');
                    refetch();
                }
            })
    };

    const handleDeleteProduct = product => {
        fetch(`https://e-exchange.vercel.app/product/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('resaleToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Product Deleted');
                }
            })
    };
    
    return (
        <div>
            <h2 className="text-3xl text-center mb-4">My Products: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Advertize</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && 
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td className='text-rose-700 font-semibold'>{product.productName}</td>
                                <td><div className="avatar">
                                    <div className="w-24 mask mask-squircle">
                                        <img src={product.photo} alt='product' />
                                    </div>
                                </div></td>
                                <td>{product.resale_price}</td>
                                <td>{!product.isAdvertised === true && <button onClick={() => handleAdvertising(product._id)} className='btn btn-xs btn-primary text-white'>Advertise</button>}</td>
                                <td>
                                    <button onClick={() => handleDeleteProduct(product)} className="btn btn-xs btn-secondary">Delete</button>
                                </td>
                            </tr>
                            )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;