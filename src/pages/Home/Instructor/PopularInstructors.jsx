
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const PopularInstructors = () => {
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await fetch("https://pranayama-server.vercel.app/instructorusers");
    const data = await res.json();

    // Filter the instructors based on the user role "instructor"
    const instructorUsers = data.filter((user) => user.role === "instructor");

    return instructorUsers;
  });

  const sortedInstructors = instructors.sort((a, b) => b.totalStudents - a.totalStudents);
  const popularInstructors = sortedInstructors.slice(0, 6);

  return (
    <div className="mx-4 md:mx-20 ">
      <h1 className="text-3xl my-10 font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
        Popular Instructors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {popularInstructors.map((instructor) => (
          <div key={instructor._id} className="flex flex-col items-center p-4 border border-purple-600 rounded-lg">
            <img src={instructor.image} alt={instructor.instructorName} className="w-full h-auto" />
            <p className="mt-2 text-center"><span className="text-purple-700 font-bold">Name:</span> <span className="text-lg text-slate-700">{instructor.name}</span></p>
            <p className="mt-2 text-center"><span className="text-amber-600  font-bold">Email:</span> <span className="text-lg text-slate-700">{instructor.email}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;


