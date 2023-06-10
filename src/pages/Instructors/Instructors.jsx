import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        // Fetch user data from the server or API
        // Replace the URL with your actual endpoint for fetching user data
        fetch("https://pranayama-server.vercel.app/instructorusers")
            .then((response) => response.json())
            .then((data) => {
                // Filter the users based on the role "instructor"
                const instructorUsers = data.filter((user) => user.role === "instructor");
                setInstructors(instructorUsers);
            })
            .catch((error) => {
                console.error("Error fetching user data:", error);
            });
    }, []);

    return (
        <div className="m-5">
            <Helmet>
                <title>Pranayama | All Instructors</title>
            </Helmet>
            <h1 className="text-3xl m-5 font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                Instructors
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {instructors.map((instructor) => (
                    <div key={instructor._id} className="bg-white shadow-md p-4">
                        <img
                            src={instructor.image}
                            alt={instructor.name}
                            className="w-24 h-24 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2"><span className="text-orange-600">Name:</span> <span>{instructor.name}</span></h3>
                        <p className="text-gray-600"><span className="text-xl font-semibold text-emerald-600">Email:</span> {instructor.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instructors;
