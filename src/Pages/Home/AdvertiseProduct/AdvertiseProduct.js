import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import AdvertiseCard from './AdvertiseCard/AdvertiseCard';

const AdvertiseProduct = ({products, isLoading}) => {
    
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='max-w-screen-xl mx-auto my-20'>
                <h1 className='text-center text-3xl text-primary font-bold mb-3'>Grap this Now!!</h1>
                <h1 className='text-center text-2xl text-rose-700 font-bold mb-5'>Hot Deal!</h1>
                <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center pl-4'>
                    {
                        products.map(product => <AdvertiseCard
                            key={product._id}
                            product={product}
                        ></AdvertiseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProduct;