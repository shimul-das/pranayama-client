import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const PopularClasses = () => {
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await fetch("http://localhost:5000/approvedclass");
    const data = await res.json();
    return data;
  });

  const approvedClasses = classes.filter((cls) => cls.status === "approved");
  const sortedClasses = approvedClasses.sort((a, b) => b.enrolledStudent - a.enrolledStudent);
  const popularClasses = sortedClasses.slice(0, 6);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Popular Classes</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">Popular Classes</h3>
      <div className="grid grid-cols-3 gap-4">
        {popularClasses.map((cls) => (
          <div
            key={cls._id}
            className="flex flex-col items-center border border-solid border-purple-600 p-4"
            style={{ borderColor: "#7E22CE" }}
          >
            <img src={cls.image} alt={cls.className} className="w-full h-auto" />
            <p>{cls.className}</p>
            <p>Students Enrolled: {cls.enrolledStudent}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;