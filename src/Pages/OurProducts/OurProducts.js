import React, { useEffect, useState } from 'react';
import OurProduct from '../OurProduct/OurProduct';

const OurProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
            <h2 className='text-5xl font-semibold'>Our Browse Products</h2>
                <p className='mt-5'>The Majority Have Suffered Alteration in Some Form By Injected Humour, Or Randomised <br/> words as on Dore Look Even Sactly.</p>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 my-20'>
                {
                    products.map(product => <OurProduct key={product.id} product={product}></OurProduct>)
                }
            </div>

        </div>
    );
};

export default OurProducts;