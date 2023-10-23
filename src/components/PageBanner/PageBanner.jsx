import PropTypes from 'prop-types';

const PageBanner = ({title,subtitle,bgImg}) => {
    return (
        <section className="mb-10">
            <div className="box">
                <div className="relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 rounded-md  bg-gradient-to-r to-[rgba(21, 21, 21, 0.00)] pl-12 from-[#151515] flex items-center b">
                        <h1 className="text-white text-4xl font-bold">{title}</h1>
                    </div>
                    <div className="hidden sm:block absolute bottom-0  w-full left-0">
                        <div className=" flex items-center justify-center ">
                            <div className="border-b-[50px] border-b-primary w-[400px] border-l-[30px] border-r-[30px] border-x-transparent relative">
                                <span className=" text-white font-semibold absolute  left-2/4 top-2/4 translate-y-2/4  block -translate-x-2/4 ">{subtitle}</span>
                            </div>
                        </div>
                    </div>
                    <img src={bgImg} className="rounded-md" alt="" />
                </div>
            </div>
        </section>
    );
};
PageBanner.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgImg : PropTypes.string
}

export default PageBanner;