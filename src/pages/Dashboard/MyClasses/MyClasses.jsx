



import { useEffect, useState } from "react";
import useClasses from "../../../hooks/useClasses";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  const [classes, refetch] = useClasses();

  return (
    <div className="m-5">
      <Helmet>
        <title>Pranayama | Instructor Classes</title>
      </Helmet>
      <h1 className="text-2xl text-center text-blue-600"><span className=" font-semibold">Total Classes: </span><span className="badge badge-accent text-xl">{classes.length}</span></h1>
      {classes.length === 0 ? (
        <p>No classes found.</p>
      ) : (
        <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {classes.map((classItem, index) => (
            <div key={classItem._id} className="border border-purple-600">
              <div className="p-4">
                <h5 className="font-bold mb-2">Class {index + 1}</h5>
                <img  src={classItem.image} alt="" />
                <p className="mb-2 pt-2"><span className="font-bold text-orange-500">Class Name:</span> <span>{classItem.className}</span></p>
                <p className="mb-2"><span className="font-bold text-emerald-500">Status:</span> <span className="badge badge-accent text-sm font-bold">{classItem.status}</span></p>
                <p className="mb-2">
                  <span className="font-bold text-sky-600">Total Enrolled Students:</span> <span className="badge badge-success text-sm font-bold">{classItem.enrolledStudent}</span>
                </p>
                <p className="mb-2 font-bold text-red-500">
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

