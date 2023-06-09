import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

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
    <h1>My Selected Classes</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {selectedClasses.length === 0 ? (
        <p>No selected classes found.</p>
      ) : (
        selectedClasses.map((classItem) => (
          <div key={classItem._id} className="bg-white rounded-lg p-4 border border-7E22CE">
            <p>Class Name: {classItem.className}</p>
            <p>Instructor Name: {classItem.instructorName}</p>
            <p>Instructor Email: {classItem.instructorEmail}</p>
            <p>Available Seats: {classItem.availableSeats}</p>
            <p>Price: {classItem.price}</p>
            <p>Image: {classItem.image}</p>
            <p>Enrolled Students: {classItem.enrolledStudent}</p>
            <div className="flex justify-between items-center mt-4">
              <button onClick={() => handleDeleteClass(classItem._id)} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                Delete
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => handlePay(classItem._id)}>
                Pay
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

export default MyselectedClasses;
