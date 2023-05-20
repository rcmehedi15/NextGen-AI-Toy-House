import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { ToyContext } from '../../../ToyProvider/ToyProvider';

const AddToy = () => {
    const {user} = useContext(ToyContext)
    const handleAddToy = (event) => {
        event.preventDefault();

        const form = event.target;

        const toyName = form.toyname.value;
        const sellerName = form.seller.value;
         
        const sellerEmail = form.sellerEmail.value; 

        const photo = form.photo.value;
        const subCategory = form.subCategory.value;
        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const availableQuantity = form.availableQuantity.value;
        const detailDescription = form.detailDescription.value;

        const toyData = { photo, toyName, sellerName,sellerEmail, subCategory, Price, Rating, availableQuantity, detailDescription };

        console.log(toyData);

        // send data to the server
        fetch('http://localhost:5000/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(toyData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                }
            });
    };

    return (
        <div>
            <div className="bg-[#F4F3F0] p-4 md:p-24">
                <h2 className="text-3xl font-extrabold">Add a Toy</h2>
                <form onSubmit={handleAddToy} >
                    {/* toy and seller name   */}
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 md:mr-2">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label >
                                <input required type="text" name="toyname" placeholder="Toy Name" className="border border-gray-300 p-2 rounded-md w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-2">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label >
                                <input required type="text" name="seller" placeholder="Seller Name" className="border border-gray-300 p-2 rounded-md w-full" />
                            </label>
                        </div>
                    </div>
                    {/* sub catagory and seller email  */}
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 md:mr-2">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <label >
                                <input required type="text" name="subCategory" placeholder="Sub-category" className="border border-gray-300 p-2 rounded-md w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-2">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <label >
                                <input required  type="email" name='sellerEmail' value={user?.email} placeholder="Website Login Email" className="border border-gray-300 p-2 rounded-md w-full" />
                            </label>
                        </div>
                    </div>
                    {/* rating and price  */}
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 md:mr-2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label >
                                <input required type="number" name="Price" placeholder="Price" className="border border-gray-300 p-2 rounded-md w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label >
                                <input required type="number" name="Rating" placeholder="Rating" className="border border-gray-300 p-2 rounded-md w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 md:mr-2">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <label >
                                <input required type="number" name="availableQuantity" placeholder="Available quantity" className="border border-gray-300 p-2 rounded-md w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label >
                                <input required type="text" name="photo" placeholder="Photo URL" className="border border-gray-300 p-2 rounded-md w-full" />
                                
                            </label>
                        </div>
                    </div>

                    {/* form Photo URL row */}
                    <div className="mb-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <label >
                                <textarea required rows="4" type="text" name="detailDescription" placeholder="Detail description" className="border border-gray-300 p-2 rounded-md w-full" />
                              
                            </label>
                        </div>
                    </div>
                    <input required type="submit" value="Add Toy" className="btn bg-[#EB455F] text-white border-none" />
                </form>
            </div>
        </div>
    );
};

export default AddToy;
