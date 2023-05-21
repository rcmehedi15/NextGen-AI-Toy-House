import React, { useEffect, useState } from 'react';
import ShopByTable from './ShopByTable';

// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


const ShopByCatagory = () => {
    const [activeTab, setActiveTab] = useState("All Toys");

    const [Alltoy, setAllToy] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5001/AllToys/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setAllToy(result);
            })
        fetch(`http://localhost:5001/AllToys/${activeTab}`)
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    // search box 
    const [searchText, setSearchText] = useState();



    return (
        <>

            <div className='container mx-auto'>
                <h2 className="text-center text-4xl font-bold text-[#243E63] ">Shop by
                    <span className="bg-[#EB455F] text-white shape m-5 "> Category</span></h2>
                <div className="tab-container text-center">

                    <div className="text-center w-full mx-auto my-4">
                        <div className="tabs flex justify-center items-center">
                            <div
                                onClick={() => handleTabClick("All Toys")}
                                className={`tab tab2 Alltoy ${activeTab === "All Toys" ? "bg-[#EB455F] text-white" : ""
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
                                    <th>Details</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    Alltoy?.map((singleToy, index) => (
                                        <ShopByTable index={index} singleToy={singleToy} key={singleToy._id}></ShopByTable>
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

export default ShopByCatagory;