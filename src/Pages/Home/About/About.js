import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className="max-w-sm rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src={parts}  alt='' className=" w-3/5 right-5 top-1/2 absolute max-w-sm rounded-lg shadow-2xl border-gray-50 border-4" />
                </div>
                <div className='w-1/2'>
                    <p className='text-orange-600 text-2xl font-bold my-5'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br />
                        & of experience <br /> on this field</h1>
                    <p className="py-6">There Are Many Variations Of Passenes Of Lorem Ipsu Aveable, But The Majorby Have Suffered iteration in Some Form, By injected Humour, Or Randomssed Woods Which Don't Look Even Sightly Beliable</p>
                    <p className='py-6'>The Majority Have Suffered Alteration in Some Form By Injected Humour, Or Randomised words as on Dore Look Even Sactly.</p>
                    <button className="btn btn-secondary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;