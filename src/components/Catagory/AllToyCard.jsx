import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AllToyCard = ({ singleToy }) => {
  const {
    _id,
    photo,
    toyName,
    Price,
    Rating
  } = singleToy;

  const handleViewDetails = () => {
    // Check if the user is logged in
    const isLoggedIn = true; // Replace with your actual login check logic

    if (isLoggedIn) {
      // User is logged in, navigate to the single toy details page
      window.location.href = `/toysDetails/${_id}`;
    } else {
      // User is not logged in, show toast message
      console.log(isLoggedIn);
      toast.error('Please log in first.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Duration in milliseconds

      });
    }
  };

  return (
    <>
      <div className="card w-full border-solid border-2 border-gray-200">
        <figure className="aspect-w-4 aspect-h-3">
          <img
            src={photo}
            alt=""
            className="object-cover object-center w-full h-80"
          />
        </figure>

      <div className="p-4">
        <h2 className="card-title text-2xl">{toyName}</h2>
        <div className="flex gap-4 my-3">
          <p className="text-[#EB455F] border-gray-200 w-24 rounded-lg p-1">Rating: {Rating}</p>
        </div>
        <div>
          <p className="text-gray-700 flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {Price}
          </p>
        </div>
      </div>

      <button
        onClick={handleViewDetails}
        className="ms-4 mb-3 p-3 rounded-lg bg-[#EB455F] text-white w-32"
      >
        View Details
      </button>
    </div >
    </>
  );
};

export default AllToyCard;
