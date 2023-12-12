import React from 'react';
import './OurProduct.css'
import { FaStar } from "react-icons/fa";

const OurProduct = ({ product }) => {
    const { name, img, price } = product;
    return (
        <div className='grid grid-cols-1 mx-10 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20'>

            <div className="card w-80  shadow-xl">
                <figure><img className='p-5 bg-slate-100' src={img} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <div className='flex justify-center align-middle'>
                        <FaStar className='text'></FaStar>
                        <FaStar className='text'></FaStar>
                        <FaStar className='text'></FaStar>
                        <FaStar className='text'></FaStar>
                        <FaStar className='text'></FaStar>
                    </div>
                    {/* <p className="card-title text-center">{name}</p> */}
                    <h2 className='font-bold text-2xl'>{name}</h2>
                    <p className='text-orange-600 font-bold text-2xl'>$ {price}</p>
                </div>
            </div>

        </div>
    );
};

export default OurProduct;