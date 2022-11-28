import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    });

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddProduct = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        productName: data.productName,
                        email: user?.email,
                        photo: imgData.data.url,
                        seller_name: user?.displayName,
                        description: data.description,
                        categoryName: data.category,
                        location: data.location,
                        resale_price: data.resale_price,
                        original_price: data.original_price,
                        condition: data.condition,
                        purchase_year: data.purchase_year,
                        years_use: data.years_use
                    }

                    // save products information to the database
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('resaleToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.productName} is added successfully`);
                            // navigate('/dashboard/myproducts')
                        });
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className=''>
            <div className="flex justify-center items-center  mt-12 mb-4">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h3 className='text-3xl py-4 text-center'>Add Products</h3>
                        <form
                            onSubmit={handleSubmit(handleAddProduct)}
                        >
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Product Name:</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Product Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("productName", {
                                        required: true
                                    })}
                                />
                                <label className="label">
                                    <span className="label-text">Product Image:</span>
                                </label>
                                <input
                                    type="file"
                                    placeholder="Upload an image"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("image", {
                                        required: true
                                    })}
                                />
                                <label className="label">
                                    <span className="label-text">Category:</span>
                                </label>
                                <select
                                    {...register("category", {
                                        required: true
                                    })}
                                    className="select select-bordered text-sm sm:text-base pr-4 rounded-lg border  w-full py-2">
                                    {
                                        categories.map(category =>
                                            <option
                                                key={category._id}
                                                value={category.categoryName}
                                            >{category.categoryName}</option>
                                        )
                                    }
                                </select>
                                <label className="label">
                                    <span className="label-text">Description:</span>
                                </label>
                                <textarea className="textarea w-full pb-8 border-gray-300"
                                    {...register("description")}
                                    placeholder="Description"></textarea>
                                <label className="label">
                                    <span className="label-text">Condition:</span>
                                </label>
                                <select
                                    {...register("condition", {
                                        required: true
                                    })}
                                    className="select select-bordered text-sm sm:text-base pr-4 rounded-lg border  w-full py-2">
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>
                                <label className="label">
                                    <span className="label-text">Location:</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("location")}
                                />
                                <label className="label">
                                    <span className="label-text">Mobile Number:</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter mobile number"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("mobile")}
                                />
                                <label className="label">
                                    <span className="label-text">Original Price:</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Original Price"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("original_price")}
                                />
                                <label className="label">
                                    <span className="label-text">Resale Price:</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Resale Price"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("resale_price")}
                                />
                                <label className="label">
                                    <span className="label-text">Purchase Year:</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Purchase Year"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("purchase_year")}
                                />
                                <label className="label">
                                    <span className="label-text">Years of Use:</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Purchase Year"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("years_use")}
                                />
                                <input
                                    type="submit"
                                    className="btn mt-4 w-full max-w-xs"
                                    value="Add Product"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;