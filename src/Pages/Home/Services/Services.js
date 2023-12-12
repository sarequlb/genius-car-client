import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    const [isAsc, setIsAsc] = useState(true)
    const searchRef = useRef()
    const [search,setSearch] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/services?order=${isAsc ? 'asc' : 'dsc'}&search=${search}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc,search])

    const handleSearch = () =>{
        setSearch(searchRef.current.value)
    }
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p>The Majority Have Suffered Alteration in Some Form By Injected Humour, Or Randomised <br /> words as on Dore Look Even Sactly.</p>
                <input ref={searchRef} type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                <button onClick={handleSearch} className="btn btn-outline btn-secondary">Search</button>
                <br></br>
                <button onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'dsc' : 'asc'}</button>
            </div>
            <div className='grid grid-cols-1 mx-10 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;