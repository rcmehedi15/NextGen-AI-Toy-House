import React from 'react';

const Gallery = () => {
    return (

        <>
            <h2 className="text-center text-4xl font-bold text-[#243E63] ">Our Best
                <span className="bg-[#EB455F] text-white shape m-5 "> Gallary</span></h2>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/X2C2zGd/1.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/YZmsg1f/2.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/0svZGqg/3.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/KFnh3sg/4.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/vsD1QCK/5.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/K9PZms3/6.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/s5htRKk/7.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/yP7XprL/8.jpg" alt="" />
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/hyZd3St/9.jpg" alt="" />
                </div>
                
            </div>
        </>
    );
}

export default Gallery;
