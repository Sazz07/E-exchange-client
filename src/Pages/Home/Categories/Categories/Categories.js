import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';
import CategoriesCard from '../CategoriesCard/CategoriesCard';


const Categories = () => {
    const { data: categories = [], refetch, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://e-exchange.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h1 className='text-center text-3xl text-rose-700 font-bold mb-3'>Categories</h1>
            <h1 className='text-center text-2xl text-primary font-bold mb-5'>Chose Your Favorite Brand</h1>
            <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center pl-4'>
                {
                    categories.map(category => <CategoriesCard
                        key={category._id}
                        categories={category}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;