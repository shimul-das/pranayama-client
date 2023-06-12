

import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MyselectedClasses = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        // Fetch selected classes when the component mounts
        fetchSelectedClasses();
    }, []);

    const fetchSelectedClasses = async () => {
        try {
            const response = await axiosSecure.get("/selectclass");
            setSelectedClasses(response.data);
        } catch (error) {
            console.error(error);
            // Handle error fetching selected classes
        }
    };

    const handleDeleteClass = async (classId) => {
        console.log(classId)
        try {
            await axiosSecure.delete(`/selectclass/${classId}`);
            // Update the selected classes list after successful deletion
            fetchSelectedClasses();
            Swal.fire({
                icon: "success",
                text: "Selected class deleted!",
                timer: 1500,
                showConfirmButton: false,
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                text: "Failed to delete selected class",
                timer: 1500,
                showConfirmButton: false,
            });
        }
    };

    return (
        <div className='m-5'>
            <Helmet>
                <title>Pranayama | Student Select Classes</title>
            </Helmet>
            <h1 className='text-2xl text-center  p-2'>Total Selected Classes: <span className='text-purple-700'>{selectedClasses.length}</span></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {selectedClasses.length === 0 ? (
                    <p>No selected classes found.</p>
                ) : (
                    selectedClasses.map((classItem) => (
                        <div key={classItem._id} className="bg-white rounded-lg p-4 border border-[#9333EA]">
                            <p><img src={classItem.image} alt="" /></p>
                            <p><span className='font-semibold text-black'>Class Name:</span> <span className='from-accent-focus'>{classItem.className}</span></p>
                            <p><span className='font-semibold text-black'>Instructor Name:</span> <span className='from-accent-focus'>{classItem.instructorName}</span></p>
                            <p><span className='font-semibold text-black'>Instructor Email:</span> <span className='from-accent-focus'>{classItem.instructorEmail}</span></p>
                            <p><span className='font-semibold text-black'>Available Seats:</span> <span className='badge badge-accent'>{classItem.availableSeats}</span></p>
                            <p><span className='font-semibold text-black'>Price:</span> <span className='badge badge-secondary'>{classItem.price}$</span></p>
                            <p><span className='font-semibold text-black'>Enrolled Students:</span> <span className='badge badge-primary'>{classItem.enrolledStudent}</span></p>
                            <div className="flex justify-between items-center mt-4">
                                <button onClick={() => handleDeleteClass(classItem._id)} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                                    Delete
                                </button>
                                <Link to={`/dashboard/payment/${classItem._id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                                        Pay
                                    </button>
                                </Link>

                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyselectedClasses;

