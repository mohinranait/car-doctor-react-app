

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#151515] pt-20 pb-8'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <div>
                        <div className='mb-5'>
                            <span className='text-3xl font-bold text-white uppercase'>Logo<span className='text-primary'>With</span> </span>
                        </div>
                        <p className='text-lg text-gray-500'>Asatharon is getting a web site like live conferencing. We are committed to providing the best service to the user</p>
                    </div>
                    <div>
                        <p className='text-xl text-white font-bold'>Links</p>
                        <ul className='mt-2'>
                            <li><Link to={'/'} className='text-gray-500 font-medium py-[6px] block'>Home</Link></li>
                            <li><Link to={'/login'} className='text-gray-500 font-medium py-[6px] block' >Login</Link></li>
                            <li><Link to={'/register'} className='text-gray-500 font-medium py-[6px] block' >Register</Link></li>
                            <li><Link to={'/dashboard'} className='text-gray-500 font-medium py-[6px] block' >Dashboard</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-xl text-white font-bold'>Contact</p>
                        <ul className='mt-2'>
                            <li className='mb-3'>
                                <div className='border border-gray-800 relative rounded-md'>
                                    <button className='px-3 py-[6px] bg-primary  text-white rounded-md absolute right-1 top-2/4 -translate-y-2/4'>Subscribe</button>
                                    <input type="text" className='py-3 px-3 bg-transparent w-full focus:outline-none ' placeholder='Email...'  />
                                </div>    
                            </li>
                            <li><button className='text-gray-500 font-medium py-[6px] block' href="#">admin@gmail.com</button></li>
                            <li><button className='text-gray-500 font-medium py-[6px] block' href="#">(+488) 05487541</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;