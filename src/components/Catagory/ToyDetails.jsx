import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ToyDetails = () => {
    //all data receive
    const toyAllData = useLoaderData()
    //single data find
    const { toyId } = useParams();
    const findToySingleData = toyAllData.find(info => info.id === toyId)
    // find data destructing 
    const { _id, photo, toyName, sellerName, sellerEmail, subCategory, Price, Rating, availableQuantity, detailDescription } = findToySingleData;

    console.log(findToySingleData);
    return (
        <>
            <h1 className='text-center font-bold mt-4 bg-slate-500 p-5 text-white container rounded-lg mx-auto'>Toy Details </h1>
            <div className="max-w-sm container mx-auto rounded overflow-hidden shadow-lg my-4">
                <img className="w-full" src={photo} alt={toyName} />
                <div className="px-6 py-4">
                    <div className="font-bold  text-xl mb-2"><span className=' text-[#EB455F]  '>Toy Name: </span> {toyName} </div><br />
                    <p className="text-gray-700 text-base "> <span className='p-2 bg-[#EB455F] rounded-md text-white'>Product Description </span> <br /> <br />{detailDescription}</p> <br />
                    <p className="text-gray-700 text-base "> <span className='p-2 bg-[#33aa65] rounded-md text-white'>Product Details </span> <br /> <br /></p>
                    
                    <p className="text-gray-700 text-base">Price: {Price}</p>
                    <p className="text-gray-700 text-base">Rating: {Rating}</p>
                    <p className="text-gray-700 text-base">Available Quantity: {availableQuantity}</p>
                </div>
                <div className="px-6 py-4">
                    <p className="text-gray-700 text-base "> <span className='p-2 bg-[#243E63] rounded-md text-white'>Seller Details </span> <br /> <br /></p>
                    <p className="text-gray-700 text-base">Seller Name: {sellerName}</p>
                    <p className="text-gray-700 text-base">Seller Email: {sellerEmail}</p>
                    
                </div>
            </div>
        </>
    );
};

export default ToyDetails;