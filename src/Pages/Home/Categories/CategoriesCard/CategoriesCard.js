import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ categories }) => {
    const { img, _id } = categories;
    
    return (
        <Link to={`/category/${_id}`}>
            <div className="w-96 h-auto bg-base-100 shadow-2xl rounded-xl">
                <figure>
                    <img className='h-full w-full' src={img} alt="categories" />
                </figure>
            </div>
        </Link>
    );
};

export default CategoriesCard;