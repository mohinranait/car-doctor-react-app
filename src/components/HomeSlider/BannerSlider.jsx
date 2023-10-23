import img1 from  "../../../public/img/1.jpg"
import img2 from  "../../../public/img/2.jpg"
import img3 from  "../../../public/img/3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SliderItem from './SliderItem';
import "./bannerSlider.css";

import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";



const BannerSlider = () => {
    const sliders = [
        { _id:1, img : img1},
        { _id:2, img : img2},
        { _id:3, img : img3},
    ]


    return (
        <>
            <Swiper 
                navigation={
                    {
                        nextEl : ".swiper-button-next",
                        prevEl : ".swiper-button-prev",
                        clickable : true,
                    }
                }
                modules={[Navigation]} 
                className="mySwiper"
            >
                {
                    sliders?.map(banner =>   <SwiperSlide  key={banner._id}>
                        <SliderItem banner={banner} />
                    </SwiperSlide> )
                }
                <div className="hidden  top-2/4 bottom-5  z-50 md:flex items-center justify-end gap-10 pl-5">
                    <div className="swiper-button-prev w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                       <IoArrowBackOutline className="text-white text-sm z-50" />
                    </div>
                    <div className="swiper-button-next w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                        <IoArrowForward className="text-white text-sm z-50" />
                    </div>
                </div>
            </Swiper>   
        </>
    );
};

export default BannerSlider;