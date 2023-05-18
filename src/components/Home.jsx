import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom'
import ChefSection from './Chef/ChefSection';

import Testimonial from './Testimonial/Testimonial';
import Banner from './Banner';
const Home = () => {
    const jobs = useLoaderData();


    return (
        <>
            <section>
               <Banner></Banner>


                <div className='text-center container mx-auto my-5'>
                    <h1 className='text-3xl font-bold '>OUR CHEF</h1>
                    <p className='text-gray-700 my-4'>Best Chef for our country </p>
                </div>
                <div className='container mx-auto my-5 '>
                    <div className=' grid grid-cols-2 container mx-auto gap-5'>
                        {
                            jobs.map(job => <ChefSection key={job._id} job={job} >

                            </ChefSection>)
                        }
                    </div>
                </div>

                <section>
                    <Testimonial></Testimonial>
                </section>
            </section>
        </>
    );
};

export default Home;