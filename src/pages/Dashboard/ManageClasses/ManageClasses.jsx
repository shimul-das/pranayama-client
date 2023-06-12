

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaCheck, FaTimes, FaComment } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["adminclasses"], async () => {
    const res = await axiosSecure.get("/adminclasses");
    return res.data;
  });

  const [selectedClass, setSelectedClass] = useState({});
  const [feedback, setFeedback] = useState("");

  const handleApprove = async (selectedClass) => {
    try {
      await axiosSecure.patch(`/adminclasses/${selectedClass._id}/status`, { status: "approved" });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${selectedClass.className} is now approved!`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to approve class",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleDeny = async (selectedClass) => {
    try {
      await axiosSecure.patch(`/adminclasses/${selectedClass._id}/status`, { status: "denied" });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${selectedClass.className} is now denied!`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to deny class",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleOpenModal = (selectedClass) => {
    setSelectedClass(selectedClass);
  };

  const handleCloseModal = () => {
    setSelectedClass({});
    setFeedback("");
  };

  const handleSendFeedback = async (classId, feedback) => {
    try {
      await axiosSecure.post(`/adminclasses/${classId}/feedback`, { feedback });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Feedback sent!",
        showConfirmButton: false,
        timer: 1500,
      });
      handleCloseModal();
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to send feedback",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Pranayama | Manage Classes</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">All Classes</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {classes.map((c) => (
              <tr key={c._id}>
                <td>
                  <img src={c.image} alt="Class" />
                </td>
                <td>{c.className}</td>
                <td>{c.instructorName}</td>
                <td>{c.instructorEmail}</td>
                <td>{c.availableSeats}</td>
                <td>{c.price}</td>
                <td>{c.status}</td>
                <td>
                  <button
                    onClick={() => handleApprove(c)}
                    disabled={ c.status === "approved" || c.status === "denied"}
                    className="btn btn-ghost bg-green-600 text-white"
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => handleDeny(c)}
                    disabled={c.status === "approved" || c.status === "denied"}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTimes />
                  </button>
                  <button
                    onClick={() => handleOpenModal(c)}
                    // disabled={c.status === "approved" || c.status === "denied"}
                    className="btn btn-ghost bg-blue-600 text-white"
                  >
                    <FaComment />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedClass && Object.keys(selectedClass).length > 0 && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-8 rounded-md">
            <h3 className="text-lg font-semibold mb-4">Send Feedback to Instructor</h3>
            <p><span className="font-bold">Class Name:</span> {selectedClass.className}</p>
            <p><span className="font-bold">Class ID:</span> {selectedClass._id}</p>
            <p><span className="font-bold">Instructor Name:</span> {selectedClass.instructorName}</p>
            <p><span className="font-bold">Instructor Email:</span> {selectedClass.instructorEmail}</p>
            <textarea
              className="w-full h-24 mt-4 p-2 border border-gray-300 rounded-md"
              placeholder="Enter your feedback..."
              value={feedback}
              onChange={handleInputChange}
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button onClick={handleCloseModal} className="btn btn-ghost mr-2">
                Cancel
              </button>
              <button
                onClick={() => handleSendFeedback(selectedClass._id, feedback)}
                className="btn btn-primary"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;



