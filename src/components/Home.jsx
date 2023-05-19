import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import ToySection from './Toy/ToySection';

import Testimonial from './Testimonial/Testimonial';
import Banner from './Banner';
import Contact from './Contact/Contact';
import Why from './Why/Why';
import Faq from './Faq/Faq';
import Gallery from './Gallery/Gallery';
import Catagory from './Catagory/Catagory';
const Home = () => {
    const jobs = useLoaderData();


    return (
        <>
            {/* <section>
               <Banner></Banner>
                <Gallery></Gallery>
                <Catagory></Catagory>
                <div className='text-center container mx-auto my-5'>
                    <h1 className='text-3xl font-bold '>OUR CHEF</h1>
                    <p className='text-gray-700 my-4'>Best Chef for our country </p>
                </div>
                <div className='container mx-auto my-5 '>
                    <div className=' grid grid-cols-2 container mx-auto gap-5'>
                        {
                            jobs.map(job => <ToySection key={job._id} job={job} >

                            </ToySection>)
                        }
                    </div>
                </div>

                <section>

                    <Why></Why>
                    <Testimonial></Testimonial>
                    <Contact></Contact>
                    <Faq></Faq>
                </section>

            </section> */}
        </>
    );
};

export default Home;