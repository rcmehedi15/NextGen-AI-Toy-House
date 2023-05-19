import React, { useEffect, useState } from 'react';
import AllToyCard from './AllToyCard';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';


const AllToyCatagory = () => {

    const [Alltoy, setAllToy] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allToys")
            .then((res) => res.json())
            .then((result) => {
                setAllToy(result);
            })
    }, [])

    return (
        <>

            <div className='container mx-auto'>
                <h2 className="text-center text-4xl font-bold text-[#243E63] ">Shop by
                    <span className="bg-[#EB455F] text-white shape m-5 "> Category</span></h2>
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