import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigationType } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const order = useLoaderData();
    const navigation = useNavigationType();
    const { productName, price, userName } = order;
    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-center items-center flex-col mx-auto mt-6'>
            <div>
            <h3 className="text-3xl">Hello <span className='text-primary'>{userName}</span></h3>
            <p className="text-xl">Please pay <strong className='text-rose-600'>${price}</strong> for your {productName}.</p>
            </div>
            <div className='w-96 my-8'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;