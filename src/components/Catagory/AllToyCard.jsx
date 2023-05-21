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
    <tr>
      <th>
        <label>
         
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        Zemlak, Daniel and Leannon
        <br />
        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
      </td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default AllToyCard;
