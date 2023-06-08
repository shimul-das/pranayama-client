import { useEffect, useState } from "react";
import useClasses from "../../../hooks/useClasses";

const MyClasses = () => {
  
  const [classes, refetch] = useClasses(); // Call refetch from useCart to update the classes
 // Call fetchClasses whenever refetch changes
  return (
    <div>
      <h1>Classes Added by Instructor:{classes.length}</h1>
      {classes.length === 0 ? (
        <p>No classes found.</p>
      ) : (
        <ul>
          {classes.map((classItem) => (
            <li key={classItem._id}>
              <p>Status: {classItem.status}</p>
              <p>Total Enrolled Students: {classItem.enrolledStudents}</p>
              <p>Feedback: {classItem.feedback}</p>
              <button>Update</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyClasses;
