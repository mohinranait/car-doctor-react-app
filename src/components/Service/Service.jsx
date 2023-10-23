import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import SectionHeader from '../SectionHeader/SectionHeader';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const res = await fetch("services.json");
            const data = await res.json();
            setServices(data);
            console.log(data);
            console.log('data');
        };
        fetchServices();
    },[])
    return (
        <section className='py-10'>
             <SectionHeader subTitle='Service' title='Our Service Area' text="The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
          
            <div className="box">
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services?.map(service => <ServiceCard key={service._id} service={service} /> )
                    }
                   
                </div>
                <div className='text-center pt-8 pb-12'><button className='btn text-primary border-primary'>More Services</button></div>
            </div>
        </section>
    );
};

export default Service;