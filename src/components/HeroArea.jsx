import React from 'react';
import { Link } from 'react-router-dom';

const HeroArea = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/YWzjfsf/bgimg.png"/>
                    <div>
                        <h1 className="text-5xl font-bold text-[#EB455F] mb-2">Best Robotics Toy Store </h1> <span className="text-4xl font-bold text-[#272626] " >Online Shop!</span>
                        <p className="py-6">Give The Gift Your Robotics Lover People</p>
                        <Link to="/profile" className="btn bg-[#EB455F] text-white border-none">Get Started </Link> :
                    </div>
                </div>
            </div>

        </>
    );
};

export default HeroArea;