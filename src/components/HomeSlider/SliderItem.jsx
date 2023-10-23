import PropTypes from 'prop-types';

const SliderItem = ({banner}) => {
    const {img} = banner;

    return (
        <>
            <div className=''>
                <div className='relative rounded-md'>
                    <div className='absolute rounded-md top-0 left-0 w-full bg-gradient-to-r to-[rgba(21, 21, 21, 0.00)] pl-12 from-[#151515] bottom-0 flex items-center'>
                        <div className='lg:w-1/2 space-y-6'>
                            <h1 className='text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                            <p className='text-base text-gray-200'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4'>
                                <button className='btn border-primary bg-primary'>Discover More</button>
                                <button className='btn'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <img src={img} className='rounded-md lg:h-[600px] w-full' alt="" />
                </div>
            </div>
        </>
    );
};


SliderItem.propTypes = {
    banner : PropTypes.object
}

export default SliderItem;