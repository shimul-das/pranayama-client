

import { useQuery } from "@tanstack/react-query";


const PopularClasses = () => {
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await fetch("https://pranayama-server.vercel.app/approvedclass");
    const data = await res.json();
    return data;
  });


  const approvedClasses = classes.filter((cls) => cls.status === "approved");
  const sortedClasses = approvedClasses.sort((a, b) => b.enrolledStudent - a.enrolledStudent);
  const popularClasses = sortedClasses.slice(0, 6);

  return (
    <div  className= "mx-4 md:mx-20">
      <h1 className="text-3xl my-10 font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
        Popular Classes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {popularClasses.map((cls) => (
          <div
            key={cls._id}
            className="flex flex-col items-center border border-solid border-purple-600 p-4 rounded-lg"
            style={{ borderColor: "#7E22CE" }}
          >
            <img src={cls.image} alt={cls.className} className="w-full h-auto" />
            <p className="mt-2 text-center font-bold text-purple-700">{cls.className}</p>
            <p className="mt-2 text-center"><span className="text-amber-600 font-semibold">Total Students Enrolled:</span> <span className="badge badge-accent">{cls.enrolledStudent}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
