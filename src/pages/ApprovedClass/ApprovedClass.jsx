


import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import { useLocation, useNavigate } from 'react-router-dom';
import useStudent from "../../hooks/useStudent";
import useInstructor from "../../hooks/useInstructor";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ApprovedClass = () => {
    const [classes, setClasses] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();
    const [isInstructor] = useInstructor();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://pranayama-server.vercel.app/approvedclass");
                const classData = response.data;
                const approvedClasses = classData.filter(classItem => classItem.status === "approved");
                setClasses(approvedClasses);
            } catch (error) {
                console.error("Error fetching class data:", error);
            }
        };

        fetchData();
    }, []);

    //   const handleSelectClass = (classId) => {
    //     if (!user) {
    //       alert("Please log in before selecting the course.");
    //       navigate("/login", { state: { from: location } });
    //       return;
    //     }

    //     // Add your class selection logic here
    //     // ...

    //     console.log("Class selected:", classId);
    //   };

    const handleSelectClass = async (classItem) => {
        if (!user) {
            Swal.fire({
                icon: "warning",
                text: "Please log in before selecting the course.",
                confirmButtonText: "OK",
            });
            navigate("/login", { state: { from: location } });
            return;
        }

        const selectedClass = {
            classId: classItem._id,
            className: classItem.className,
            instructorName: classItem.instructorName,
            instructorEmail: classItem.instructorEmail,
            userEmail: user.email,
            availableSeats: classItem.availableSeats,
            price: classItem.price,
            image: classItem.image,
            enrolledStudent: classItem.enrolledStudent
        };

        try {
            await axiosSecure.post("/selectclass", selectedClass);
            console.log("Class selected:", classItem._id);
            Swal.fire({
                icon: "success",
                text: "Class selected!",
                timer: 1500,
                showConfirmButton: false,
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                text: "Failed to select class",
                timer: 1500,
                showConfirmButton: false,
            });
        }
    };




    return (
        <div>
            <Helmet>
                <title>Pranayama | Approved Classes</title>
            </Helmet>

            <h1 className="text-3xl py-4 font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                Approved All Classes
            </h1>
            <div className="flex flex-wrap">
                {classes.length === 0 ? (
                    <p>No classes found.</p>
                ) : (
                    classes.map((classItem) => (
                        <div key={classItem._id} className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 ${classItem.availableSeats === 0 ? "bg-red-600" : ""}`}>
                            <div className="bg-white border border-purple-600 rounded-lg p-4">
                                <img src={classItem.image} alt={classItem.name} className="w-full h-40 object-cover mb-4" />
                                <p className="text-lg font-bold">{classItem.name}</p>
                                <p><span className="text-lg font-semibold text-red-500">Class Name:</span> <span className="font-semibold">{classItem.className}</span></p>
                                <p><span className="text-lg font-semibold text-orange-600">Instructor Name:</span> <span className="font-semibold">{classItem.instructorName}</span></p>
                                <p><span className="text-lg font-semibold text-emerald-600">Available Seats:</span> <span className="badge badge-accent">{classItem.availableSeats}</span></p>
                                <p><span className="text-lg font-semibold text-sky-600">Price:</span> <span className="badge badge-secondary">{classItem.price}$</span></p>
                                <button
                                    disabled={classItem.availableSeats === 0 || (user && (isAdmin || isInstructor))}
                                    //   disabled={!user || (classItem.availableSeats === 0) || (user && (isAdmin || isInstructor))}
                                    onClick={() => handleSelectClass(classItem)}
                                    className={`mt-4 px-4 py-2 rounded-lg hover:bg-purple-700 ${classItem.availableSeats === 0 || (user && (isAdmin || isInstructor)) ? "bg-gray-400" : "bg-purple-600 text-white"
                                        }`}
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
