import React, { useContext, useEffect, useState } from 'react';
import { ToyContext } from '../../../ToyProvider/ToyProvider';

import Swal from "sweetalert2";
import MyToyTable from './MyToyTable';
import useTitle from '../../../Hook/useTitle';


const MyToy = () => {
    useTitle('My Toy')

    const [sort, setSort] = useState(" ");

    const { user } = useContext(ToyContext)

    const [toys, setToy] = useState([])
    // login use show my toy
    const url = `https://next-gen-toy-server.vercel.app/myToys?sort=${sort}&email=${user?.email}`;
    console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [sort])
    // delete data
    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://next-gen-toy-server.vercel.app/myToys/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = toys.filter(myToy => myToy._id !== id);
                        setToy(remaining);
                    }
                })
        }
    }

    // sort 
    const handleAsc = () => {
        setSort("asc")
    }
    const handleDac = () => {
        setSort("dac")
    }

    return (
        <>
            <hr />
            <div className=" mx-auto text-center">
                <h1 className="font-bold text-3xl mb-4">My Toy Post</h1>

                <div className=' gap-2  flex items-center justify-center '>
                    <button onClick={() => handleAsc()} className="btn btn-error">Acending</button>
                    <button onClick={() => handleDac()} className="btn btn-outline btn-success">Descending</button>
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
                                    <MyToyTable
                                        key={toy._id}
                                        toy={toy}
                                        index={index}
                                        handleDelete={handleDelete}

                                    >


                                    </MyToyTable>
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