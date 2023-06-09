import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyenrolledClass= () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        // Fetch selected classes when the component mounts
        fetchSelectedClasses();
    }, []);

    const fetchSelectedClasses = async () => {
        try {
            const response = await axiosSecure.get("/enrollclasses");
            setSelectedClasses(response.data);
        } catch (error) {
            console.error(error);
            // Handle error fetching selected classes
        }
    };


    return (
        <div className='m-5'>
            <h1>My Enrolled Classes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {selectedClasses.length === 0 ? (
                    <p>No selected classes found.</p>
                ) : (
                    selectedClasses.map((classItem) => (
                        <div key={classItem._id} className="bg-white rounded-lg p-4 border border-7E22CE">
                            <p>Class Name: {classItem.className}</p>
                            <p>Instructor Name: {classItem.instructorName}</p>
                            <div className="flex justify-between items-center mt-4">
                                <button  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                                    View Class
                                </button>

                            </div>
                            {/* Add additional buttons or actions as needed */}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyenrolledClass;
