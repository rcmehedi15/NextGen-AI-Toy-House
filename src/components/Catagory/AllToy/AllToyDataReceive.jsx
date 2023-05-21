import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import ToyCard from './ToyCard';

const AllToyDataReceive = () => {
    // const allToys = useLoaderData();
    const [allToy, setallToy] = useState([]);
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        fetch(`http://localhost:5001/toys?limit=${limit}`)
            .then((res) => res.json())
            .then((data) => setallToy(data))
    }, [])
    console.log(allToy);

    // const { _id, photo, toyName, sellerName, sellerEmail, subCategory, Price, Rating, availableQuantity, detailDescription } = allToys;

    // console.log(allToys);

    return (
        <>
            <div className='container mx-auto'>
                <h2 className="text-center text-4xl font-bold text-[#243E63] ">All Toy
                    <span className="bg-[#EB455F] text-white shape m-2  ">Page</span></h2>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Toy Name & Catagory</th>
                                <th>Seller Details</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                allToy?.map((Toy,index) => (
                                    <ToyCard index={index} Toy={Toy} key={Toy._id}></ToyCard>
                                ))
                            }

                        </tbody>


                    </table>
                    <hr className='my-5'/>
                    <div className='text-center my-4'>
                        <button className="btn btn-active btn-success text-white  ">See More</button>

                    </div>

                </div>
            </div>

        </>
    );
};

export default AllToyDataReceive;