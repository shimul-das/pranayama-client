// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import { FaTrashAlt, FaUserShield } from "react-icons/fa";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";


// const AllUsers = () => {
//     const [axiosSecure] = useAxiosSecure();
//     const { data: users = [], refetch } = useQuery(['users'], async () => {
//         const res = await axiosSecure.get('/users')
//         return res.data;
//     })

//     const handleMakeAdmin = user =>{
//         fetch(`http://localhost:5000/users/admin/${user._id}`, {
//             method: 'PATCH'
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             if(data.modifiedCount){
//                 refetch();
//                 Swal.fire({
//                     position: 'top-end',
//                     icon: 'success',
//                     title: `${user.name} is an Admin Now!`,
//                     showConfirmButton: false,
//                     timer: 1500
//                   })
//             }
//         })
//     }

//     const handleDelete = user => {

//     }

//     return (
//         <div className="w-full">
//             <Helmet>
//                 <title>Bistro Boss | All users</title>
//             </Helmet>
//             <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
//             <div className="overflow-x-auto">
//                 <table className="table table-zebra w-full">
//                     {/* head */}
//                     <thead>
//                         <tr>
//                             <th>#</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             users.map((user, index) => <tr key={user._id}>
//                                 <th>{index + 1}</th>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>{ user.role === 'admin' ? 'admin' :
//                                     <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
//                                     }</td>
//                                 <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
//                             </tr>)
//                         }
                        
                        
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default AllUsers;

// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import { FaTrashAlt, FaUserShield } from "react-icons/fa";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const AllUsers = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const { data: users = [], refetch } = useQuery(["users"], async () => {
//     const res = await axiosSecure.get("/users");
//     return res.data;
//   });

//   const handleMakeRole = (user, role) => {
//     fetch(`http://localhost:5000/users/role/${user._id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ role }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.modifiedCount) {
//           refetch();
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${user.name} is now a ${role}!`,
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       });
//   };

//   const handleDelete = (user) => {
//     // Handle delete logic here
//   };

//   return (
//     <div className="w-full">
//       <Helmet>
//         <title>Bistro Boss | All users</title>
//       </Helmet>
//       <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
//       <div className="overflow-x-auto">
//         <table className="table table-zebra w-full">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <th>{index + 1}</th>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>
//                   {user.role === "admin" ? (
//                     "admin"
//                   ) : (
//                     <div>
//                       <button
//                         onClick={() => handleMakeRole(user, "admin")}
//                         className="btn btn-ghost bg-orange-600 text-white"
//                       >
//                         <FaUserShield></FaUserShield>
//                       </button>
//                       <button
//                         onClick={() => handleMakeRole(user, "instructor")}
//                         className="btn btn-ghost bg-blue-600 text-white"
//                       >
//                         Instructor
//                       </button>
//                       <button
//                         onClick={() => handleMakeRole(user, "user")}
//                         className="btn btn-ghost bg-green-600 text-white"
//                       >
//                         User
//                       </button>
//                     </div>
//                   )}
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(user)}
//                     className="btn btn-ghost bg-red-600 text-white"
//                   >
//                     <FaTrashAlt></FaTrashAlt>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllUsers;
//////////////
// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet-async";
// import { FaTrashAlt, FaUserShield } from "react-icons/fa";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const AllUsers = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const { data: users = [], refetch } = useQuery(["users"], async () => {
//     const res = await axiosSecure.get("/users");
//     return res.data;
//   });

//   const handleMakeRole = (user, role) => {
//     fetch(`http://localhost:5000/users/role/${user._id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ role }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.modifiedCount) {
//           refetch();
//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: `${user.name} is now a ${role}!`,
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         }
//       });
//   };

//   const handleDelete = (user) => {
//     // Handle delete logic here
//   };

//   return (
//     <div className="w-full">
//       <Helmet>
//         <title>Bistro Boss | All users</title>
//       </Helmet>
//       <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
//       <div className="overflow-x-auto">
//         <table className="table table-zebra w-full">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Update Role</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <th>{index + 1}</th>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.role}</td>
//                 <td>
//                   {user.role === "admin" ? (
//                     "admin"
//                   ) : (
//                     <div>
//                       <button
//                         onClick={() => handleMakeRole(user, "admin")}
//                         className="btn btn-ghost bg-orange-600 text-white"
//                       >
//                         <FaUserShield></FaUserShield>
//                       </button>
//                       <button
//                         onClick={() => handleMakeRole(user, "instructor")}
//                         className="btn btn-ghost bg-blue-600 text-white"
//                       >
//                         Instructor
//                       </button>
//                       <button
//                         onClick={() => handleMakeRole(user, "user")}
//                         className="btn btn-ghost bg-green-600 text-white"
//                       >
//                         User
//                       </button>
//                     </div>
//                   )}
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(user)}
//                     className="btn btn-ghost bg-red-600 text-white"
//                   >
//                     <FaTrashAlt></FaTrashAlt>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllUsers

import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeRole = (user, role) => {
    fetch(`http://localhost:5000/users/role/${user._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now a ${role}!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleDelete = (user) => {
    axiosSecure.delete(`/users/${user._id}`)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} has been deleted successfully!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to delete user",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title> Pranayama | All users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Update Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <div>
                      <button
                        onClick={() => handleMakeRole(user, "admin")}
                        className="btn btn-ghost bg-orange-600 text-white"
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                      <button
                        onClick={() => handleMakeRole(user, "instructor")}
                        className="btn btn-ghost bg-blue-600 text-white"
                      >
                        Instructor
                      </button>
                      <button
                        onClick={() => handleMakeRole(user, "user")}
                        className="btn btn-ghost bg-green-600 text-white"
                      >
                        User
                      </button>
                    </div>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
