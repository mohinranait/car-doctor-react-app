import PropTypes from 'prop-types';
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';

const TeamsCard = ({team}) => {
    const {image,title,post} = team || {};
    return (
        <>
            <div className='border p-3 rounded-md bg-white'>
                <div className='bg-[#F3F3F3] rounded-md'>
                    <img src={image} alt="" className='rounded-md object-cover w-full mx-auto ' />
                </div>
                <div className='pt-3'>
                    <p className='text-2xl font-semibold text-subTitle text-center'>{title}</p>
                    <p className='text-base font-semibold text-muted text-center'>{post}</p>
                </div>
                <ul className='flex items-center justify-center gap-3 mt-2'>
                    <li><a href="#" className='flex items-center justify-center w-10 h-10 rounded-full bg-[#3373e9]' ><IoLogoFacebook className='text-white' /></a></li>
                    <li><a href="#" className='flex items-center justify-center w-10 h-10 rounded-full bg-[#32bcf2]' ><IoLogoTwitter className='text-white' /></a></li>
                    <li><a href="#" className='flex items-center justify-center w-10 h-10 rounded-full bg-[#205acc]' ><IoLogoLinkedin className='text-white' /></a></li>
                </ul>
            </div>     
        </>
    );
};

TeamsCard.propTypes = {
    team : PropTypes.object
};

export default TeamsCard;