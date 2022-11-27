import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const AllBuyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyer/buyer')
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className='text-3xl my-8 text-center'>All Buyers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            buyers.map((buyer, i) =>
                            <tr key={buyer._id}
                                    className='hover'>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td><button className='btn btn-xs btn-secondary'>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;