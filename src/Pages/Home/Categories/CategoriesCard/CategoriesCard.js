import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ categories }) => {
    const { img, title, _id } = categories;
    // console.log(categories);

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className=''>
                    <img className='h-full w-full' src={img} alt="categories" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{title}</h2>
                    <Link to={`/category/${_id}`}>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Show Products</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;