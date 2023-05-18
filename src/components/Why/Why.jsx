import React from 'react';

const Why = () => {
    return (
        <>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/fxW0jQh/ai4.jpg" className="rounded-lg shadow-2xl" />
                    <div className="flex flex-col  ">
                        <h2 className=" text-4xl font-bold text-[#243E63] ">Why
                            <span className="bg-[#EB455F] text-white shape m-2 ">Choose Us ?</span></h2>

                        <h2 className="text-3xl font-bold mb-4">A Reputed Brand</h2>
                        <p className="text-gray-700  max-w-md mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div>
                                <h4 className="text-2xl font-bold mb-2">94000+</h4>
                                <p className="text-gray-600">Orders</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-2xl font-bold mb-2">11000+</h4>
                                <p className="text-gray-600">Customers</p>
                            </div>
                            <div className="text-center">
                                <h4 className="text-2xl font-bold mb-2">10+</h4>
                                <p className="text-gray-600">Team Member</p>
                            </div>
                        </div>
                        <button className="bg-[#EB455F] hover:bg-[#243E63] text-white font-bold py-2 px-4 rounded-lg md:w-32">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Why;