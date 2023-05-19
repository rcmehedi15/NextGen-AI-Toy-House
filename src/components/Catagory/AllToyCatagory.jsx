import React, { useEffect, useState } from 'react';
import AllToyCard from './AllToyCard';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


const AllToyCatagory = () => {
    const [activeTab, setActiveTab] = useState("All Toys");

    const [Alltoy, setAllToy] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setAllToy(result);
            })
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>

            <div className='container mx-auto'>
                <h2 className="text-center text-4xl font-bold text-[#243E63] ">Shop by
                    <span className="bg-[#EB455F] text-white shape m-5 "> Category</span></h2>
                <div className="tab-container text-center">
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
                <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-4 my-4 md:gap-4 ">



                    {
                        Alltoy.map((singleToy) => (
                            <AllToyCard singleToy={singleToy} key={singleToy._id}></AllToyCard>
                        ))
                    }
                </div>

            </div>


        </>
    );
};

export default AllToyCatagory;