import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/seller/seller')
            const data = await res.json();
            return data;
        }
    });

    console.log(sellers);

    const handleVerifySeller = email => {
        fetch(`http://localhost:5000/products/verifySeller/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('resaleToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verified seller successfully !!');
                    refetch();
                }
            })
    };

    const handleDeleteSeller = seller => {
        fetch(`http://localhost:5000/users/seller/${seller._id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Seller Deleted')
                }
            })
    };

    console.log(sellers);
    return (
        <div>
            <h3 className='text-3xl my-8 text-center'>All Sellers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr key={seller._id}
                                    className='hover'>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller?.verify !== "verified" &&
                                        <button
                                            onClick={() => handleVerifySeller(seller.email)}
                                            className='btn btn-xs btn-primary text-white'>Verify Seller</button>}</td>
                                    <td><button onClick={() => handleDeleteSeller(seller)} className='btn btn-xs btn-secondary font-bold'>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;