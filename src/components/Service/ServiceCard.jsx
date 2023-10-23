import PropTypes from 'prop-types';
import { IoArrowForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img,title} = service;
    return (
        <div className='border p-3 rounded-md bg-white'>
            <div className=''>
                <img src={img} alt="" className='rounded-md h-52 w-full object-cover' />
            </div>
            <div className='pt-3'>
                <p className='text-2xl font-semibold text-subTitle'>{title}</p>
            </div>
            <div className='flex pt-1 justify-between items-center'>
                <span className='text-xl text-primary font-semibold'>Price : $20.00</span>
                <Link className=''><IoArrowForward className='text-2xl text-primary' /></Link>
            </div>

        </div>
    );
};

ServiceCard.propTypes = {
    service : PropTypes.object.isRequired,
}

export default ServiceCard;