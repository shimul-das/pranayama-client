// import { useEffect, useState } from "react";
// import useClasses from "../../../hooks/useClasses";

// const MyClasses = () => {
  
//   const [classes, refetch] = useClasses(); // Call refetch from useCart to update the classes
//  // Call fetchClasses whenever refetch changes
//   return (
//     <div>
//       <h1>Classes Added by Instructor:{classes.length}</h1>
//       {classes.length === 0 ? (
//         <p>No classes found.</p>
//       ) : (
//         <ul>
//           {classes.map((classItem) => (
//             <li key={classItem._id}>
//               <p>Status: {classItem.status}</p>
//               <p>Total Enrolled Students: {classItem.enrolledStudents}</p>
//               <p>Feedback: {classItem.feedback}</p>
//               <button>Update</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MyClasses;



import { useEffect, useState } from "react";
import useClasses from "../../../hooks/useClasses";

const MyClasses = () => {
  const [classes, refetch] = useClasses();

  return (
    <div className="m-5">
      <h1 className="text-2xl text-center text-blue-600">Classes Added by Instructor: {classes.length}</h1>
      {classes.length === 0 ? (
        <p>No classes found.</p>
      ) : (
        <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {classes.map((classItem, index) => (
            <div key={classItem._id} className="border border-purple-600">
              <div className="p-4">
                <h5 className="font-bold mb-2">Class {index + 1}</h5>
                <p className="mb-2">Status: {classItem.status}</p>
                <p className="mb-2">
                  Total Enrolled Students: {classItem.enrolledStudent}
                </p>
                <p className="mb-2">
                  Feedback: {classItem.feedback}
                </p>
                {classItem.status === "denied" && (
                  <p className="mb-2">Feedback: {classItem.feedback}</p>
                )}
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded">
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyClasses;

