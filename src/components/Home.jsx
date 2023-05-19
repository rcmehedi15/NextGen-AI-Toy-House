import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import Testimonial from './Testimonial/Testimonial';
import Banner from './Banner';
import Contact from './Contact/Contact';
import Why from './Why/Why';
import Faq from './Faq/Faq';
import Gallery from './Gallery/Gallery';
import Catagory from './Catagory/AllToyCatagory';
import AllToyCatagory from './Catagory/AllToyCatagory';
const Home = () => {
    const jobs = useLoaderData();


    return (
        <>
            {/* <section>
               <Banner></Banner>
                <Gallery></Gallery>
                <Catagory></Catagory>
           

                <section>

                    <Why></Why>
                    <Testimonial></Testimonial>
                    <Contact></Contact>
                    <Faq></Faq>
                </section>

            </section> */}
            <AllToyCatagory></AllToyCatagory>
        </>
    );
};

export default Home;