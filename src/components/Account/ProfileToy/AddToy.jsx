import React, { useState } from 'react';

const AddToy = () => {
  const [pictureURL, setPictureURL] = useState('');
  const [name, setName] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you can add code to handle the form submission,
    // such as sending the data to a server or updating state.

    // Clearing the form fields after submission
    setPictureURL('');
    setName('');
    setSellerName('');
    setSellerEmail('');
    setSubCategory('');
    setPrice('');
    setRating('');
    setQuantity('');
    setDescription('');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8 ">Add A Toy <hr className='mt-2 w-52 mx-auto' /></h1>
        
        <form onSubmit={handleSubmit} className="container mx-auto bg-white p-6 rounded-md shadow-md">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="pictureURL">
                Picture URL
              </label>
              <input
                type="text"
                id="pictureURL"
                className="border border-gray-300 p-2 rounded-md w-full"
                value={pictureURL}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="sellerName">
                Seller Name
              </label>
              <input
                type="text"
                id="sellerName"
                className="border border-gray-300 p-2 rounded-md w-full"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="sellerEmail">
                Seller Email
              </label>
              <input
                type="email"
                id="sellerEmail"
                className="border border-gray-300 p-2 rounded-md w-full"
                value={sellerEmail}
                onChange={(e) => setSellerEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="subCategory">
                Sub-category
              </label>
              <input
                type="text"
                id="subCategory"
                className="border border-gray-300 p-2 rounded-md w-full"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                Price
              </label>
              <input
                type="text"
                id="price"
                className="border border-gray-300 p-2 rounded-md w-full"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
                Rating
              </label>
              <input
                type="text"
                id="rating"
                className="border border-gray-300 p-2 rounded-md w-full"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
                Available Quantity
              </label>
              <input
                type="text"
                id="quantity"
                className="border border-gray-300 p-2 rounded-md w-full"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Detail Description
            </label>
            <textarea
              id="description"
              className="border border-gray-300 p-2 rounded-md w-full"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Toy
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToy;
