import React, { useContext, useEffect, useState } from 'react';
import { ToyContext } from '../../../ToyProvider/ToyProvider';

import Swal from "sweetalert2";


const MyToy = () => {
    const {user} = useContext(ToyContext)
    const [toys, setToy] = useState([])
    const url = `http://localhost:5000/myToys?email=${user.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setToy(data) )
    },[])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/myToys/${user?.email}`)
    //         .then((res) => res.json())
    //         .then((result) => {
    //             console.log(result);
    //             setToy(result);
    //         })
    // }, [user]);

    // delete data 

    // const handleDelete = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             fetch(`http://localhost:5000/myToys/${_id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your Coffee has been deleted.',
    //                             'success'
    //                         )
    //                     }

    //                 })
    //         }
    //     })
    // }
    return (
        <>
            <hr />
            <div className=" mx-auto text-center">
                <h1 className="font-bold text-3xl mb-4">My Toy Post</h1>

                <div className=" flex flex-col sm:flex-row justify-center items-center mb-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#EB455F] focus:border-transparent mb-2 sm:mb-0 sm:mr-2"
                    />
                    <button className="px-4 py-2 bg-[#EB455F] text-white rounded-r-md">
                        Search
                    </button>
                </div>

                <div className="p-4 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">No</th>
                                <th className="px-4 py-2">Picture</th>
                                <th className="px-4 py-2">Toy Name</th>
                                <th className="px-4 py-2">Seller Name</th>
                                <th className="px-4 py-2">Seller Email</th>
                                <th className="px-4 py-2">Sub-category</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Rating</th>
                                <th className="px-4 py-2">Available Quantity</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys?.map((toy, index) => (
                                    <tr className="bg-gray-100">
                                        <td>{index + 1}</td>
                                        <td className="px-4 py-2">
                                            <img src={toy.photo} alt="" />
                                        </td>
                                        <td className="px-4 py-2">{toy.toyName}</td>
                                        <td className="px-4 py-2">{toy.sellerName}</td>
                                        <td className="px-4 py-2">{toy.sellerEmail}</td>
                                        <td className="px-4 py-2">{toy.subCategory}</td>
                                        <td className="px-4 py-2">{toy.Price}</td>
                                        <td className="px-4 py-2">{toy.Rating}</td>
                                        <td className="px-4 py-2">{toy.availableQuantity}</td>
                                        <td className="px-4 py-2">{toy.detailDescription}</td>
                                        <td className="px-4 py-2 flex space-x-2">
                                            <button className="px-2 py-1 bg-green-600 text-white rounded-md">
                                                Edit
                                            </button>
                                            <button className="px-2 py-1 bg-red-500 text-white rounded-md" >
                                                Delete
                                            </button>
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </>
    );
};

export default MyToy;