import React from 'react';
import { Link } from 'react-router-dom';

const ShopByTable = ({ singleToy, index }) => {
    const { _id, photo, toyName, sellerName, sellerEmail, subCategory, Price, Rating, availableQuantity, detailDescription } = singleToy;
    // console.log(singleToy,index);
    

    return (
        <>
            <div className=" card w-96 bg-base-100 shadow-xl">
                <img src={photo}  className='h-64 ' />
                <p className="absolute  mr-4 mt-4 px-4 bg-[#393950] text-white">${Price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{toyName.slice(0,20)}</h2>
                    <p>{subCategory}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/toysDetails/${_id}`} className="btn btn-outline hover:bg-[#332FD0] mt-4">View Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopByTable;