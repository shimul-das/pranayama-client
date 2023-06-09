// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";

// const PopularInstructors = () => {
//   const { data: instructors = [] } = useQuery(["instructors"], async () => {
//     const res = await fetch("http://localhost:5000/instructorusers");
//     const data = await res.json();
//     return data;
//   });

//   const sortedInstructors = instructors.sort((a, b) => b.totalStudents - a.totalStudents);
//   const popularInstructors = sortedInstructors.slice(0, 6);

//   return (
//     <div>
//       <Helmet>
//         <title>Bistro Boss | Popular Instructors</title>
//       </Helmet>
//       <h3 className="text-3xl font-semibold my-4">Popular Instructors</h3>
//       <div className="grid grid-cols-3 gap-4">
//         {popularInstructors.map((instructor) => (
//           <div key={instructor._id} className="flex flex-col items-center p-4 border border-purple-600 rounded-lg">
//             <img src={instructor.image} alt={instructor.instructorName} className="w-full h-auto" />
//             <p>Name:{instructor.name}</p>
//             <p>Email:{instructor.email}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularInstructors;

import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const PopularInstructors = () => {
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await fetch("http://localhost:5000/instructorusers");
    const data = await res.json();
    
    // Filter the instructors based on the user role "instructor"
    const instructorUsers = data.filter((user) => user.role === "instructor");
    
    return instructorUsers;
  });

  const sortedInstructors = instructors.sort((a, b) => b.totalStudents - a.totalStudents);
  const popularInstructors = sortedInstructors.slice(0, 6);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Popular Instructors</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">Popular Instructors</h3>
      <div className="grid grid-cols-3 gap-4">
        {popularInstructors.map((instructor) => (
          <div key={instructor._id} className="flex flex-col items-center p-4 border border-purple-600 rounded-lg">
            <img src={instructor.image} alt={instructor.instructorName} className="w-full h-auto" />
            <p>Name: {instructor.name}</p>
            <p>Email: {instructor.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
