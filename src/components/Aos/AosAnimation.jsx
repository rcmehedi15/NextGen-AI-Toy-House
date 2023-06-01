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
                <span className="bg-[#EB455F] text-white shape m-2">Team Member </span>
            </h2>
            <div className='container mx-auto '>
                <div class="flex flex-col w-full lg:flex-row">
                    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center" data-aos="zoom-in">Md Mehedi Hasan</div>
                    <div class="divider lg:divider-horizontal">&</div>
                    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center" data-aos="flip-right" >MD Musfiqur Rahman</div>
                </div>
                <div class="flex flex-col w-full lg:flex-row my-3">
                    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center" data-aos="zoom-in-up" >Baizid Bali</div>
                    <div class="divider lg:divider-horizontal">&</div>
                    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center" data-aos="flip-left">Limon Hasan</div>
                </div>
            </div>

        </div>



    );
};

export default AosAnimation;
