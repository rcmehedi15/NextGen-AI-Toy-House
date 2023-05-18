import React from 'react';

const Contact = () => {
    return (
        <>
            <section className="container mx-auto md:flex-row p-2 md:p-10 md:mt-5">
            <h2 className="text-center text-4xl font-bold text-[#243E63] ">To Contact
           <span className="bg-[#EB455F] text-white shape m-2 "> us</span></h2>
                <p className="text-center   mx-auto text-b7-white">
                    The phrase let's talk typically refers to an invitation for two or <br /> more people to discuss something.
                </p>
                {/* card area */}
                <div className="grid md:grid-cols-2  mt-10">
                    
                    <form className="md:ml-8">
                        <div className="mb-3">
                            <input
                                type="text"
                                id="email"
                                className="text-gray-900 text-sm rounded-lg block w-full p-4 dark:border-gray-200 dark:placeholder-gray-600 dark:text-white bg-b7-input"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                id="email"
                                className="text-gray-900 text-sm rounded-lg block w-full p-4 dark:border-gray-200 dark:placeholder-gray-600 dark:text-white bg-b7-input"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                id="email"
                                className="text-gray-900 text-sm rounded-lg block w-full p-4 dark:border-gray-200 dark:placeholder-gray-600 dark:text-white bg-b7-input"
                                placeholder="Subject"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="text-gray-900 text-sm rounded-lg block w-full p-4 dark:border-gray-200 dark:placeholder-gray-600 dark:text-white bg-b7-input"
                                placeholder="Your Message"
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-[#EB455F] hover:bg-[#242323] focus:ring-4 focus:outline-none focus:ring-b7-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-b7-primary dark:hover:bg-b7-primary dark:focus:ring-b7-primary"
                        >
                            Submit
                        </button>
                    </form>
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100">
                        {/* 1st card */}
                        <div className="text-center border border-gray-200 p-3">
                            <div className="p-3">
                                <img src="./images/icon/business.png" alt="" className="mx-auto" />
                            </div>
                            <h3 className="font-bold text-2xl py-2 text-[#243E63]">Address</h3>
                            <p className="w-3/4 mx-auto text-b7-secondary mb-3">
                                #280,Sarshi,Kasipur <br />
                                Barishal,Bangladesh
                            </p>
                        </div>

                        {/* 2nd card */}
                        <div className="text-center border border-gray-200 p-3 bg-gray-100">
                            <div className="p-3">
                                <img src="./images/contact/call.png" alt="" className="mx-auto" />
                            </div>
                            <h3 className="font-bold text-2xl py-2 text-[#243E63]">Call Us</h3>
                            <p className="w-3/4 mx-auto text-b7-secondary mb-3">
                                +88 0198 96 18 543 <br />
                                +88 0192 60 33 186
                            </p>
                        </div>

                        {/* 3rd card */}
                        <div className="text-center border border-gray-200 p-3">
                            <div className="p-3">
                                <img src="./images/contact/location.png" alt="" className="mx-auto" />
                            </div>
                            <h3 className="font-bold text-2xl py-2 text-[#243E63]">Email Us</h3>
                            <p className="w-3/4 mx-auto text-b7-secondary mb-3">
                                hmdmehedi2016@gmail.com <br />
                                mdmehedihasan20188@gmail.com
                            </p>
                        </div>

                        {/* 4th card */}
                        <div className="text-center border border-gray-200 p-3">
                            <div className="p-3">
                                <img src="./images/contact/time.png" alt="" className="mx-auto" />
                            </div>
                            <h3 className="font-bold text-2xl py-2 text-[#243E63]">Working Hours</h3>
                            <p className="w-3/4 mx-auto text-b7-secondary mb-3 ">
                                Mon-Fri: 9AM to 5PM <br />
                                Sunday: 9AM to 1 PM
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Contact;