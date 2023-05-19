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
            <img src={photo} alt="" />
        </>
    );
};

export default ToyDetails;