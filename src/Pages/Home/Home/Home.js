import React from 'react';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories/Categories';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <AdvertiseProduct></AdvertiseProduct>
            <Categories></Categories>
            <Summary></Summary>
        </div>
    );
};

export default Home;