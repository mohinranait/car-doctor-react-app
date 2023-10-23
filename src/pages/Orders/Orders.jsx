import { IoCloseSharp } from 'react-icons/io5';
import PageBanner from '../../components/PageBanner/PageBanner';
import bgImg from "../../assets/img/img_1_(2).png"
import carts1 from '../../assets/carts/1.png'
import carts2 from '../../assets/carts/2.png'
import carts3 from '../../assets/carts/3.png'

const Orders = () => {
    const orders = [
        {_id:1, image : carts1, name : "Martha Knit Top" , color: "Green", size: "L", price: 124, data : "22-10-2022"},
        {_id:2, image : carts2, name : "Martha Munt Top" , color: "Red", size: "S", price: 104, data : "25-11-2022"},
        {_id:3, image : carts3, name : "Kopat Knit Tool" , color: "black", size: "XL", price: 1004, data : "10-11-2023"},
    ]
    return (
        <>
            <PageBanner title={'Order mangement'} subtitle={"Home/Orders"} bgImg={bgImg} />      
            <section className='pt-5 pb-16'>
                <div className="box space-y-5">
                    {
                        orders?.map(order =>  <div key={order._id} className="grid border px-4 py-2 rounded-md lg:border-0  grid-cols-12 gap-4">
                        <div className='col-span-1 row-span-2  lg:col-span-1 relative'>
                            <button className='w-6 lg:h-12 h-6 lg:w-12 top-2/4 -translate-y-2/4 absolute rounded-full bg-subTitle flex items-center justify-center text-white '><IoCloseSharp className='text-xl' /></button>
                        </div>
                        <div className='col-span-2 lg:col-span-1'>
                            <img src={order?.image} className='w-full' alt="" />
                        </div>
                        <div className='col-span-7 lg:col-span-5'>
                            <p className='text-2xl font-bold text-subTitle'>{order?.name}</p>
                            <p className='text-muted text-base'>Color : {order?.color}</p>
                            <p className='text-muted text-base'>Size : {order?.size}</p>
                        </div>
                        <div className='col-span-4 text-right lg:text-left lg:col-span-2'>
                            <span className='font-semibold text-lg text-subTitle'>Price: ${order?.price} </span>
                        </div>
                        <div className='col-span-4 flex-grow text-center lg:text-left lg:col-span-2'>
                            <span className='font-semibold text-lg text-subTitle'>{order?.data} </span>
                        </div>
                        <div className=' lg:col-span-1 text-right '>
                            <button className='px-4 py-2 align-middle rounded-md text-white bg-primary font-semibold'>Pending</button>
                        </div>
                    </div> )
                    }
                   
                </div>
            </section>
        </>
    );
};

export default Orders;