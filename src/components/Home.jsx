import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import Testimonial from './Testimonial/Testimonial';
import Banner from './Banner';
import Contact from './Contact/Contact';
import Why from './Why/Why';
import Faq from './Faq/Faq';
import Gallery from './Gallery/Gallery';
import Catagory from './Catagory/ShopByCatagory/ShopByCatagory';
import AllToyCatagory from './Catagory/ShopByCatagory/ShopByCatagory';
import ShopByCatagory from './Catagory/ShopByCatagory/ShopByCatagory';
import AosAnimation from './Aos/AosAnimation';
import useTitle from '../Hook/useTitle';

const Home = () => {
    useTitle('Home')

    const jobs = useLoaderData();


    return (
        <>
            <section>
                <Banner></Banner>
                <Gallery></Gallery>
                <ShopByCatagory></ShopByCatagory>



                <section>

                    <Why></Why>
                    <Testimonial></Testimonial>
                    <AosAnimation></AosAnimation>
                    <Contact></Contact>
                    <Faq></Faq>
                </section>

            </section>


        </>
    );
};

export default Home;