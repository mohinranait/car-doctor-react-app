
import user1 from '../../assets/user/1.png';
import Rating from 'react-rating';
import { IoStar, IoStarOutline } from 'react-icons/io5';
import { FaQuoteRight } from "react-icons/fa";

const Review = () => {
    return (
        <div className='rounded-md p-5 border border-gray-100 '>
            <div className='flex gap-5 relative'>
                <span className='absolute right-4 top-3 text-[#f8c5bf] '><FaQuoteRight className='text-5xl' /></span>
                <div>
                    <img src={user1} alt="" />
                </div>
                <div>
                    <p className='text-2xl font-bold text-subTitle'>Awlad Hossain</p>
                    <p className='text-lg font-semibold text-muted'>Businessman</p>
                </div>
            </div>
            <div className='mt-5'>
                <p className='text-muted text-base'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words whic look even slightly believable. </p>
            </div>
            <div className='mt-3'>
                <Rating
                    initialRating={4}
                    readonly
                    emptySymbol={<IoStarOutline  className="text-[#FF912C]" />}
                    fullSymbol={<IoStar className="text-[#FF912C]" />}
                />
            </div>
        </div>
    );
};

export default Review;