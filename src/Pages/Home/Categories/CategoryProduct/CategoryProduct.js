import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import Products from '../Products/Products';
import PurchasingModal from '../PurchasingModal/PurchasingModal';


const CategoryProduct = () => {
    const [product, setProduct] = useState(null);
    const { categoryName, category_id } = useLoaderData();
    

    const { data: category = [], isLoading, refetch } = useQuery({
        queryKey: ['category', category_id],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category?categoryName=${categoryName}`);
            const data = await res.json();
            return data;
        }
    });

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='max-w-screen-xl mx-auto my-20'>
            <h1 className='text-center text-3xl text-rose-700 font-bold mb-3'>Here's are the {categoryName} phone.</h1>
            <h1 className='text-center text-2xl text-primary font-bold mb-5'>Select your Desire Phone.</h1>
            <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center pl-4'>
                {
                    category.map(cate => <Products
                        key={cate._id}
                        cate={cate}
                        setProduct={setProduct}
                    ></Products>)
                }
            </div>
            {
                product &&
                <PurchasingModal
                    product={product}
                    setProduct={setProduct}
                    refetch={refetch}
                ></PurchasingModal>
            }
        </section>
    );
};

export default CategoryProduct;