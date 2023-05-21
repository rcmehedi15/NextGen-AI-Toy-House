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


        
            <div className="  flex flex-col items-center justify-center ">
                <h2 className="text-center text-3xl font-bold text-[#243E63]">Our
                    <span className="bg-[#EB455F] text-white shape m-2">Toy Category AOS </span>
                </h2>

                <div className="text-white bg-purple-700 p-2 m-5 w-36 h-32 rounded-md flex items-center justify-center" data-aos="flip-left">
                    <h2 className="font-bold text-center">Entertainment Toy</h2>
                </div>

                <div className="text-white bg-red-400 p-2 m-5 rounded-md w-40 h-36 flex items-center justify-center" data-aos="fade-up-left">
                    <h2 className="font-bold text-center">Mechanical toys</h2>
                </div>

                <div className="text-white bg-purple-700 p-2 m-5 rounded-md w-44 h-40 flex items-center justify-center" data-aos="flip-up">
                    <h2 className="font-bold text-center">Electronic toys</h2>
                </div>

                <div className="text-white bg-red-400 p-2 m-5 w-48 h-44 flex items-center justify-center" data-aos="zoom-in">
                    <h2 className="font-bold text-center">Robotics Toy</h2>
                </div>
            </div>
       


    );
};

export default AosAnimation;
