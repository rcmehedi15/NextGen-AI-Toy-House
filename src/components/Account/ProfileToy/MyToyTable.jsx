import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToyTable = ({ toy, index,handleDelete }) => {
    const { _id, toyName, sellerName, sellerEmail, subCategory, Price, Rating, availableQuantity, detailDescription } = toy;

    // delete data 

   
    // const handleDelete = _id => {
    //     const proceed = confirm("are you sure you want to delete");
    //     if (proceed) {
    //         fetch(`http://localhost:5001/myToys/${_id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => console.log(data))
    //     }
    // }
    return (
        <>
            <tr className="bg-gray-100">
                <td>{index + 1}</td>
                <td className="px-4 py-2">
                    <img src={toy.photo} alt="" />
                </td>
                <td className="px-4 py-2">{toyName}</td>
                <td className="px-4 py-2">{sellerName}</td>
                <td className="px-4 py-2">{sellerEmail}</td>
                <td className="px-4 py-2">{subCategory}</td>
                <td className="px-4 py-2">{Price}</td>
                <td className="px-4 py-2">{Rating}</td>
                <td className="px-4 py-2">{availableQuantity}</td>
                <td className="px-4 py-2">{detailDescription}</td>
                <td className="px-4 py-2 flex space-x-2">
                    <Link to={`/EditToy/${_id}`} className="px-2 py-1 bg-green-600 text-white rounded-md">
                        Edit
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="px-2 py-1 bg-[#EB455F] text-white rounded-md" >
                        Delete
                    </button>
                </td>

            </tr>
        </>
    );
};

export default MyToyTable;