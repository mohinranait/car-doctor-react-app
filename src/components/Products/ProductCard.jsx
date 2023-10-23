import PropTypes from 'prop-types';
import { IoStar, IoStarOutline } from 'react-icons/io5';
import Rating from 'react-rating';

const ProductCard = ({product}) => {
    const {image,title,rating,price} = product || {};
    return (
        <>
            <div className='border p-3 rounded-md bg-white'>
                <div className='bg-[#F3F3F3] relative group rounded-md'>
                    <span className='absolute scale-0 group-hover:scale-100 transition-all top-4 right-4 bg-white p-2 cursor-pointer rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6517 3.34835C13.9484 2.64509 12.9946 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34835 3.34835C8.64509 4.05161 8.25 5.00544 8.25 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.25C4.09221 21.7502 3.93614 21.7171 3.79195 21.6531C3.64775 21.589 3.51865 21.4953 3.41302 21.3781C3.3074 21.2608 3.22761 21.1227 3.17885 20.9726C3.13009 20.8226 3.11345 20.6639 3.13 20.507L4.394 8.507C4.42316 8.23056 4.55363 7.9747 4.76025 7.78876C4.96688 7.60281 5.23503 7.49995 5.513 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507ZM8.625 10.5C8.625 10.5995 8.58549 10.6948 8.51517 10.7652C8.44484 10.8355 8.34946 10.875 8.25 10.875C8.15054 10.875 8.05516 10.8355 7.98484 10.7652C7.91451 10.6948 7.875 10.5995 7.875 10.5C7.875 10.4005 7.91451 10.3052 7.98484 10.2348C8.05516 10.1645 8.15054 10.125 8.25 10.125C8.34946 10.125 8.44484 10.1645 8.51517 10.2348C8.58549 10.3052 8.625 10.4005 8.625 10.5V10.5ZM16.125 10.5C16.125 10.5995 16.0855 10.6948 16.0152 10.7652C15.9448 10.8355 15.8495 10.875 15.75 10.875C15.6505 10.875 15.5552 10.8355 15.4848 10.7652C15.4145 10.6948 15.375 10.5995 15.375 10.5C15.375 10.4005 15.4145 10.3052 15.4848 10.2348C15.5552 10.1645 15.6505 10.125 15.75 10.125C15.8495 10.125 15.9448 10.1645 16.0152 10.2348C16.0855 10.3052 16.125 10.4005 16.125 10.5V10.5Z" stroke="#FF3811" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <img src={image} alt="" className='rounded-md w-48 h-60  object-fill mx-auto  py-4' />
                </div>
                <div className='pt-3'>
                    <div className='text-center'>
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol={<IoStarOutline  className="text-[#FF912C]" />}
                        fullSymbol={<IoStar className="text-[#FF912C]" />}
                    />
                    </div>
                    <p className='text-2xl font-semibold text-subTitle text-center'>{title}</p>
                </div>
                <div className='flex pt-1 justify-center items-center'>
                    <span className='text-xl text-primary font-semibold'>${price}.00</span>
                </div>

            </div>   
        </>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ProductCard;