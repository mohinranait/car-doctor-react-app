import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner';
import img1 from '../../assets/img/img_1_(1).png'
import cart_1 from "../../assets/carts/1.png"
import cart_2 from "../../assets/carts/2.png"
import cart_3 from "../../assets/carts/3.png"
import { IoCloseSharp } from 'react-icons/io5';

const Carts = () => {
    const carts = [
        {_id:1, image : cart_1, name : "Martha Knit Top" , color: "Green", size: "L", price: 124, data : "22-10-2022"},
        {_id:2, image : cart_2, name : "Martha Munt Top" , color: "Red", size: "S", price: 104, data : "25-11-2022"},
        {_id:3, image : cart_3, name : "Kopat Knit Tool" , color: "black", size: "XL", price: 1004, data : "10-11-2023"},
    ]
    return (
        <>
            <PageBanner title={'Cart Details'} subtitle={"Home/Carts Details"} bgImg={img1} />   
            <section className='pt-5 pb-16'>
                <div className="box">
                    <div className='overflow-x-auto'>
                        <table className='w-full border-collapse '>
                            <tbody>
                                {
                                    carts?.map(cart =>  <tr key={cart?._id}>
                                        <td className='py-2 px-1 relative'>
                                            <button className='h-12 w-12 top-2/4 -translate-y-2/4 absolute rounded-full bg-subTitle flex items-center justify-center text-white '><IoCloseSharp className='text-xl' /></button>
                                            <div className='flex gap-3 items-center pl-20'>
                                                <img src={cart?.image} className='w-28' alt="" />
                                                <div>
                                                    <p className='text-2xl font-bold text-subTitle'>{cart?.name}</p>
                                                    <p className='text-muted text-base'>Color : {cart?.color}</p>
                                                    <p className='text-muted text-base'>Size : {cart?.size}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className='font-semibold text-lg text-subTitle'>Price: ${cart?.price} </span>
                                        </td>
                                        <td>
                                            <span className='font-semibold text-lg text-subTitle'>{cart?.date}</span>
                                        </td>
                                        <td className='text-right'>
                                            <button className='px-4 py-2 align-middle rounded-md text-white bg-primary font-semibold'>Pending</button>
                                        </td>
                                    </tr> )
                                }
                               
                        
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Carts;