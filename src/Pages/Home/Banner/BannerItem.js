import React from 'react';
import './Banner.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img alt="" src={image} className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='font-bold text-6xl text-white'>Affordable <br /> Price for Car <br /> Servicing</h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-2/4 w-2/5">
                <p className='text-white text-xl'>There Are Many Variation Of Passages Of Available, But The Majority Have Suffered Alternation In Some Form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5">
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
        </div>
    );
};

export default BannerItem;