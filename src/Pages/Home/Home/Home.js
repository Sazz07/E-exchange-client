import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories/Categories';
import Summary from '../Summary/Summary';

const Home = () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://e-exchange.vercel.app/advertiseproducts');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className=''>
            <Banner></Banner>
            <Categories></Categories>
            {products && <AdvertiseProduct products={products} isLoading={isLoading}></AdvertiseProduct>}
            <Summary></Summary>
        </div>
    );
};

export default Home;