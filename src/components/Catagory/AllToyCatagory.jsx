import React, { useEffect, useState } from 'react';
import AllToyCard from './AllToyCard';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


const AllToyCatagory = () => {
    const [activeTab, setActiveTab] = useState("All Toys");

    const [Alltoy, setAllToy] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5001/allToys/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setAllToy(result);
            })
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    // search box 
    const [searchText, setSearchText] = useState();

    const handleSearch = () => {
        fetch(`http://localhost:5001/toySearchByTitle/${searchText}`)
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setAllToy(result);
            })
    }

    return (
        <>

            <div className='container mx-auto'>
                <h2 className="text-center text-4xl font-bold text-[#243E63] ">Shop by
                    <span className="bg-[#EB455F] text-white shape m-5 "> Category</span></h2>
                <div className="tab-container text-center">
                    <div className=" flex flex-col sm:flex-row justify-center items-center mb-4">
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            placeholder="Search"
                            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#EB455F] focus:border-transparent mb-2 sm:mb-0 sm:mr-2"
                        /> {" "}
                        <button onClick={handleSearch} className="px-4 py-2 bg-[#EB455F] text-white rounded-r-md">
                            Search
                        </button>
                    </div>
                    <div className="text-center w-full mx-auto">
                        <div className="tabs flex justify-center items-center">
                            <div
                                onClick={() => handleTabClick("All Toys")}
                                className={`tab tab2 allToy ${activeTab === "All Toys" ? "bg-[#EB455F] text-white" : ""
                                    }`}
                            >
                                All Toys
                            </div>
                            <div
                                onClick={() => handleTabClick("Men Robotics")}
                                className={`tab tab2 man ${activeTab === "Men Robotics" ? "bg-[#EB455F] text-white" : ""
                                    }`}
                            >
                                Men Toy
                            </div>
                            <div
                                onClick={() => handleTabClick("Women Robotics")}
                                className={`tab tab2 women ${activeTab === "Women Robotics" ? "bg-[#EB455F] text-white" : ""
                                    }`}
                            >
                                Women Toy
                            </div>
                            <div
                                onClick={() => handleTabClick("Kids Robotics")}
                                className={`tab tab2 kids ${activeTab === "Kids Robotics" ? "bg-[#EB455F] text-white" : ""
                                    }`}
                            >
                                Kids Robotics
                            </div>
                        </div>
                    </div>
                </div>
                <div >





                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Produt Name & Catagories</th>
                                    <th>Seller Details</th>
                                    <th>Price</th>
                                    <th>Available Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    Alltoy.map((singleToy) => (
                                        <AllToyCard singleToy={singleToy} key={singleToy._id}></AllToyCard>
                                    ))
                                }
                            </tbody>
                            {/* foot */}
                            

                        </table>
                    </div>


                </div>

            </div>


        </>
    );
};

export default AllToyCatagory;