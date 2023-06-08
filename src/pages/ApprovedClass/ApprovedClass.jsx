// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../../providers/AuthProvider";
// // Replace with the actual path to your AuthContext file

// const ApprovedClass = () => {
//   const [classes, setClasses] = useState([]);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/approvedclass");
//         const classData = response.data;
//         const approvedClasses = classData.filter(classItem => classItem.status === "approved");
//         setClasses(approvedClasses);
//       } catch (error) {
//         console.error("Error fetching class data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSelectClass = (classId) => {
//     if (!user) {
//       alert("Please log in before selecting the course.");
//       return;
//     }

//     // Handle the class selection logic here
//     // ...
//   };

//   return (
//     <div>
//       <h1>Approved Classes</h1>
//       {classes.length === 0 ? (
//         <p>No classes found.</p>
//       ) : (
//         <ul>
//           {classes.map((classItem) => (
//             <li key={classItem.id}>
//               <img src={classItem.image} alt={classItem.name} />
//               <p>Name: {classItem.name}</p>
//               <p>Instructor: {classItem.instructor}</p>
//               <p>Available Seats: {classItem.availableSeats}</p>
//               <p>Price: {classItem.price}</p>
//               <button
//                 onClick={() => handleSelectClass(classItem.id)}
//               >
//                 Select
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default ApprovedClass;


import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import {useLocation, useNavigate } from 'react-router-dom';
import useStudent from "../../hooks/useStudent";
import useInstructor from "../../hooks/useInstructor";

const ApprovedClass = () => {
  const [classes, setClasses] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();
  const [isInstructor] = useInstructor();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/approvedclass");
        const classData = response.data;
        const approvedClasses = classData.filter(classItem => classItem.status === "approved");
        setClasses(approvedClasses);
      } catch (error) {
        console.error("Error fetching class data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectClass = (classId) => {
    if (!user) {
      alert("Please log in before selecting the course.");
      navigate("/login", { state: { from: location } });
      return;
    }

    // Add your class selection logic here
    // ...

    console.log("Class selected:", classId);
  };

  return (
    <div>
      <h1>Approved Classes</h1>
      <div className="flex flex-wrap">
        {classes.length === 0 ? (
          <p>No classes found.</p>
        ) : (
          classes.map((classItem) => (
            <div key={classItem._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
              <div className="bg-white border border-purple-600 rounded-lg p-4">
                <img src={classItem.image} alt={classItem.name} className="w-full h-40 object-cover mb-4" />
                <p className="text-lg font-bold">{classItem.name}</p>
                <p>Instructor: {classItem.instructor}</p>
                <p>Available Seats: {classItem.availableSeats}</p>
                <p>Price: {classItem.price}</p>
                <button
                  disabled={classItem.availableSeats === 0 || (user && (user.isAdmin || user.isInstructor))}
                  onClick={() => handleSelectClass(classItem._id)}
                  className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                  Select
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ApprovedClass;