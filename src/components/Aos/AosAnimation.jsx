import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AosAnimation = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <div className="container mx-auto flex flex-col items-center justify-center p-12">
             <h2 className="text-center text-4xl font-bold text-[#243E63] ">Our Features
                    <span className="bg-[#EB455F] text-white shape m-2  ">Toy Catagory</span></h2>

            <div
                className="text-white bg-purple-700 p-2 m-5 w-48 h-40 rounded-md flex items-center justify-center"
                data-aos="flip-left"
               
            >
                <h2 className="font-bold text-center">Entertainment Toy</h2>
            </div>
            <div
                className="text-white bg-red-400 p-2 m-5 rounded-md  w-60 h-52 flex items-center justify-center"
                data-aos="fade-up-left"
            >
                <h2 className="font-bold text-center">Mechanical toys</h2>
            </div>
            <div
                className="text-white bg-purple-700 p-2 m-5 rounded-md  w-80 h-72 flex items-center justify-center"
                data-aos="flip-up"
            >
                <h2 className="font-bold text-center">Electronic toys</h2>
            </div>
              <div
                className="text-white bg-red-400 p-2 m-5 w-96 h-80 flex items-center justify-center"
                data-aos="zoom-in"
            >
                <h2 className="font-bold text-center">Robotics Toy </h2>
            </div>


        </div>
    );
};

export default AosAnimation;
