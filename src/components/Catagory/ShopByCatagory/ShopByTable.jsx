import React from 'react';
import { Link } from 'react-router-dom';

const ShopByTable = ({ singleToy ,index}) => {
    const { _id, photo, toyName, sellerName, sellerEmail, subCategory, Price, Rating, availableQuantity, detailDescription } = singleToy;
    // console.log(singleToy,index);

    return (
        <>
            <tr>
                <th>
                    {index+1}
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{toyName}</div>
                            <div className="text-sm opacity-50">{subCategory}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {sellerName}
                    <br />
                    <span className="badge border-none bg-[#EB455F] badge-md">{sellerEmail}</span>
                </td>
                <td>${Price}</td>
                <th>
                    <div className='font-normal' >{availableQuantity} Item in our stock</div>

                </th>
                <th>
                    <Link to={`/toysDetails/${_id}`} className="btn btn-ghost btn-xs badge border-none bg-[#EB455F] badge-md text-white">Details</Link>


                </th>
            </tr>
        </>
    );
};

export default ShopByTable;