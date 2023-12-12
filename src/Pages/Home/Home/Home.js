import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import OurProducts from '../../OurProducts/OurProducts';
import Teams from '../../Teams/Teams';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <OurProducts></OurProducts>
            <Teams></Teams>
        </div>
    );
};

export default Home;