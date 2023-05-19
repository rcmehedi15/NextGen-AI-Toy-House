import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const ToyAllDetailsData = useLoaderData();
    console.log(ToyAllDetailsData);
    return (
        <div>
            
        </div>
    );
};

export default ToyDetails;