import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../Hook/useTitle";


const EditToy = () => {
    useTitle('Edit Toy')
    const Toy = useLoaderData();
    const { _id, Price, availableQuantity, detailDescription } = Toy;
    console.log(Toy);
    //    const [toy,setToy] = useState()
    const handleEditToy = event => {
        

        event.preventDefault();
        const form = event.target;

        const Price = form.Price.value;
        const availableQuantity = form.availableQuantity.value;
        const detailDescription = form.detailDescription.value;
        const editedToy = { Price, availableQuantity, detailDescription }
        console.log(editedToy);

        fetch(`https://next-gen-toy-server.vercel.app/toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Edit Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <>
            <div className="bg-[#F4F3F0] p-4 md:p-24">
                <h2 className="text-3xl font-extrabold">Edit Toy</h2>
                <form onSubmit={handleEditToy}>

                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 md:mr-2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label >
                                <input required defaultValue={Price} type="number" name="Price" placeholder="Price" className="border border-gray-300 p-2 rounded-md w-full" />
                            </label>
                        </div>

                    </div>

                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2 md:mr-2">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <label >
                                <input required defaultValue={availableQuantity} type="number" name="availableQuantity" placeholder="Available quantity" className="border border-gray-300 p-2 rounded-md w-full" />
                            </label>
                        </div>

                    </div>


                    <div className="mb-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <label >
                                <textarea required defaultValue={detailDescription} rows="4" type="text" name="detailDescription" placeholder="Detail description" className="border border-gray-300 p-2 rounded-md w-full" />

                            </label>
                        </div>
                    </div>
                    <input required type="submit" value="Edit Toy" className="btn bg-[#EB455F] text-white border-none" />
                </form>
            </div>
        </>
    );
};

export default EditToy;