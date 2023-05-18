import React from 'react';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-[#243E63] ">Customers
                <span className="bg-[#EB455F] text-white shape m-2  ">Love Us</span></h2>
            <div className="container mx-auto flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80" alt="Testimonial 1" className="w-12 h-12 rounded-full mx-auto mb-4" />
                        <p className="text-gray-800 text-base mb-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut tincidunt, odio nec eleifend ."</p>
                        <p className="text-gray-600 text-sm font-bold">- Sumaiya Akter</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80" alt="Testimonial 2" className="w-12 h-12 rounded-full mx-auto mb-4" />
                        <p className="text-gray-800 text-base mb-6">"Nulla nec rhoncus ligula. Vestibulum eu cursus sem. Ut tincidunt, odio nec eleifend euismod."</p>
                        <p className="text-gray-600 text-sm font-bold">- Md Limon Hasan</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img src="https://images.unsplash.com/photo-1580852300654-03c803a14e24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4.25&w=512&h=512&q=80" alt="Testimonial 3" className="w-12 h-12 rounded-full mx-auto mb-4" />
                        <p className="text-gray-800 text-base mb-6">"Duis eget sem eu orci lacinia fringilla eu eu ligula. In tincidunt, magna vel consequat."</p>
                        <p className="text-gray-600 text-sm font-bold">- Baizid Bali</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;