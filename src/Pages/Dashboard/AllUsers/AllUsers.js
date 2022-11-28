import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/buyer/buyer')
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            adad
        </div>
    );
};

export default AllUsers;