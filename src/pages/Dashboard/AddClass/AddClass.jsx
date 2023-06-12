import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.classImage[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {className,availableSeats, price} = data;
                const newItem = {className,instructorName:user.displayName,instructorEmail:user.email,availableSeats:parseInt(price), price: parseFloat(price), image:imgURL,enrolledStudent:0,feedback:'', status:"pending"}
                console.log(newItem)
                axiosSecure.post('/class', newItem)
                .then(data => {
                    console.log('after posting new class', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };

    return (
        <>
            <Helmet>
                <title>Pranayama | Create Class</title>
            </Helmet>
            <div className="relative my-3 flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-purple-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                        Create Class
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div className="flex flex-wrap -mx-2">
                            <div className="w-full md:w-1/2 px-2 mb-4">
                                <label htmlFor="className" className="block text-sm font-semibold text-gray-800">
                                    Class Name
                                </label>
                                <input
                                    type="text"
                                    {...register("className", { required: true })}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                {errors.className && (
                                    <span className="text-red-600">Class Name is required</span>
                                )}
                            </div>


                            <div className="w-full md:w-1/2 px-2 mb-4">
                                <label htmlFor="instructorName" className="block text-sm font-semibold text-gray-800">
                                    Instructor Name
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    value={user.displayName}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4">
                                <label htmlFor="instructorEmail" className="block text-sm font-semibold text-gray-800">
                                    Instructor Email
                                </label>
                                <input
                                    type="email"
                                    readOnly
                                    value={user.email}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4">
                                <label htmlFor="availableSeats" className="block text-sm font-semibold text-gray-800">
                                    Available Seats
                                </label>
                                <input
                                    type="number"
                                    {...register("availableSeats", { required: true })}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                {errors.availableSeats && (
                                    <span className="text-red-600">Available Seats is required</span>
                                )}
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4">
                                <label htmlFor="price" className="block text-sm font-semibold text-gray-800">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    {...register("price", { required: true })}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                                {errors.price && (
                                    <span className="text-red-600">Price is required</span>
                                )}
                            </div>
                            <div className="w-full md:w-1/2 px-2 mb-4">
                                <label htmlFor="classImage" className="block text-sm font-semibold text-gray-800">
                                    Item Image*
                                </label>
                                <div className="form-control w-full my-4">
                                    <input
                                        type="file"
                                        {...register("classImage", { required: true })}
                                        className="file-input file-input-bordered w-full"
                                    />
                                </div>
                                {errors.itemImage && (
                                    <span className="text-red-600">Item Image is required</span>
                                )}
                            </div>
                        </div>
                        <div className="mt-6">
                            <input type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" value="Add Class" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddClass;
