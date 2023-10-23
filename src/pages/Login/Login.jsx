import React from 'react';
import login from '../../assets/login/login.svg'
import { IoLogoFacebook, IoLogoGoogle, IoLogoTwitter } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='mb-12'>
            <div className="box">
                <div className="grid lg:grid-cols-2 items-center gap-5">
                    <div>
                        <div>
                            <img src={login} className='mx-auto' alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='px-5 lg:px-16 pt-8 pb-5 lg:pt-16 lg:pb-8 border border-gray-100 rounded-md'>
                            <div className='mb-12'>
                                <p className='text-4xl font-bold text-subTitle text-center'>Login</p>
                            </div>
                            <div>
                                <form action="">
                                    <div className='mb-8'>
                                        <label htmlFor="" className='text-muted text-sm font-semibold mb-2 inline-block'>Email</label>
                                        <input type="text" className='py-3 px-3 rounded-md border border-gray-100 w-full outline-primary ' placeholder='Email' />
                                    </div>
                                    <div className='mb-8'>
                                        <label htmlFor="" className='text-muted text-sm font-semibold mb-2 inline-block'>Confirm Password</label>
                                        <input type="text" className='py-3 px-3 rounded-md border border-gray-100 w-full outline-primary ' placeholder='Confirm Password' />
                                    </div>
                                    <div className='mb-8'>   
                                        <button className='btn bg-primary border-primary w-full'>Sign In</button>
                                    </div>
                                   
                                </form>
                                <p className='text-center text-lg mb-3 font-semibold text-muted'>Or Sign In with</p>
                                <ul className='flex items-center justify-center gap-3 mt-2'>
                                    <li><a href="#" className='flex items-center justify-center w-12 h-12 rounded-full bg-gray-100' ><IoLogoGoogle className='text-[#e4594f] text-xl' /></a></li>
                                    <li><a href="#" className='flex items-center justify-center w-12 h-12 rounded-full bg-gray-100' ><IoLogoFacebook className='text-[#3b7dd4] text-xl' /></a></li>
                                    <li><a href="#" className='flex items-center justify-center w-12 h-12 rounded-full bg-gray-100' ><IoLogoTwitter className='text-[#47b4f3] text-xl' /></a></li>
                                </ul>
                                <p className='text-muted text-lg font-semibold text-center mt-5'>Already have an account?  <Link to={'/register'} className='text-primary'>Sign In</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;