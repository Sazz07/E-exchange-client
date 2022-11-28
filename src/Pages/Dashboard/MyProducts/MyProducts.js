import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/products/myproducts?email=${user?.email}`;
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json();
            return data;
        }
    });

    // console.log(user);

    const handleAdvertising = id => {
        fetch(`http://localhost:5000/products/advertise/${id}`, {
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
        fetch(`http://localhost:5000/product/${product._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Product Deleted');
                }
            })
    };
    console.log(products);
    return (
        <div>
            <h2 className="text-3xl">My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
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
                                <th><div className="avatar">
                                    <div className="w-24 mask mask-squircle">
                                        <img src={product.photo} alt='product' />
                                    </div>
                                </div></th>
                                <td>{product.resale_price}</td>
                                <td><button onClick={() => handleAdvertising(product._id)} className='btn btn-xs btn-primary text-white'>Advertise</button></td>
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