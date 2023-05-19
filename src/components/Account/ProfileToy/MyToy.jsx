import React from 'react';

const MyToy = () => {
    return (
        <>
             <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 font-bold mb-2" >
                Picture URL
              </label>
              <input
                type="text"
                id="pictureURL"
                className="border border-gray-300 p-2 rounded-md w-full"
                
                onChange={(e) => setPictureURL(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            </div>
        </>
    );
};

export default MyToy;