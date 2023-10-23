import React from 'react';
import ProductCard from './ProductCard';
import img1 from "../../assets/products/1.png"
import img2 from "../../assets/products/2.png"
import img3 from "../../assets/products/3.png"
import img4 from "../../assets/products/4.png"
import img5 from "../../assets/products/5.png"
import img6 from "../../assets/products/6.png"
import SectionHeader from '../SectionHeader/SectionHeader';

const Products = () => {
    const products = [
        { _id :1, image : img1, title : "Car Engine Plug", rating: 2, price : 100 },
        { _id :2, image : img2, title : "Car Air Filter", rating: 5, price : 120 },
        { _id :3, image : img3, title : "Cools Led Light", rating: 5, price : 102 },
        { _id :4, image : img4, title : "Cools Led Light", rating: 4, price : 112 },
        { _id :5, image : img5, title : "Cools Led Light", rating: 3, price : 122 },
        { _id :6, image : img6, title : "Cools Led Light", rating: 5, price : 220 },
    ]
    return (
        <section>
            <SectionHeader subTitle='Popular Products' title='Browse Our Products' text="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />
            <div className="box">
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        products?.map(product => <ProductCard key={product._id} product={product} />)
                    }                   
                </div>
                <div className='text-center pt-8 pb-12'><button className='btn text-primary border-primary'>More Services</button></div>
            </div>
        </section>
    );
};

export default Products;