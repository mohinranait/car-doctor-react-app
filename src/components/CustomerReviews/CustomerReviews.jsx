
import SectionHeader from '../SectionHeader/SectionHeader';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Review from './Review';
import  './slickSlider.css';



const CustomerReviews = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        spaceBetween : 20,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <section className='py-10'>
            <SectionHeader subTitle='Testimonial' title='What Customer Says' text={"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "} />
            <div className="box w-[90vw] mx-auto lg:w-full">
                <Slider {...settings}>
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </Slider>
            </div>
        </section>
    );
};

export default CustomerReviews;