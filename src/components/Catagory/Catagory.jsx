import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Catagory = () => {
    return (
        <>
            <div className='container mx-auto'>
                <h2 className="text-center text-4xl font-bold text-[#243E63] ">Shop by
                    <span className="bg-[#EB455F] text-white shape m-5 "> Category</span></h2>

                <Tabs>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel> 
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
};

export default Catagory;