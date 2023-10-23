
import PageBanner from '../../components/PageBanner/PageBanner';
import aboutImg from "../../assets/about/3.png"

const AddProduct = () => {
    return (
        <>
            <PageBanner title="Add New Service" subtitle={'Home/Service'} bgImg={aboutImg} />
            <section className='pb-16 pt-5'>
                <div className="box">
                    <div className='bg-[#F3F3F3] rounded-md px-5 lg:px-12 py-12'>
                        <form action="">
                            <div className='grid lg:grid-cols-2 gap-4 mb-4'>
                                <div className=''>
                                  
                                    <input type="text" className='py-3 px-3 rounded-md border border-gray-100 w-full outline-primary ' placeholder='First name' />
                                </div>
                                <div className=''>
                                    <input type="text" className='py-3 px-3 rounded-md border border-gray-100 w-full outline-primary ' placeholder='Last name' />
                                </div>
                            </div>  
                           
                            <div className='grid lg:grid-cols-2 gap-4 mb-4'>
                                <div className=''>
                                 
                                    <input type="text" className='py-3 px-3 rounded-md border border-gray-100 w-full outline-primary ' placeholder='Your phone' />
                                </div>
                                <div className=''>
                                    <input type="text" className='py-3 px-3 rounded-md border border-gray-100 w-full outline-primary ' placeholder='Your email' />
                                </div>
                            </div>  
                            <div className=' mb-4'>
                                <textarea name="" id="" cols="30" rows="4" placeholder='Your Message' className='py-3 px-3 rounded-md border border-gray-100 w-full outline-primary '></textarea>
                            </div>  
                            <div className=''>
                               <button className='btn w-full bg-primary border-primary'>Submit</button>
                            </div>  
                           
                        </form>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default AddProduct;