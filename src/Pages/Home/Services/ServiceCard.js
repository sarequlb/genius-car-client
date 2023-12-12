import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img,price,title,_id} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl text-orange-600 font-semi-bold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Check Out</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;