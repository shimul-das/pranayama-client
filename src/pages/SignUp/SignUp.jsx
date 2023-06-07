// import { useContext, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { useForm } from "react-hook-form";
// import { AuthContext } from "../../providers/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";

// const SignUp = () => {

//     const { register, handleSubmit, reset, formState: { errors } } = useForm();
//     const { createUser, updateUserProfile } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [password, setPassword] = useState("");

//     const onSubmit = data => {

//         createUser(data.email, data.password)
//             .then(result => {

//                 const loggedUser = result.user;
//                 console.log(loggedUser);

//                 updateUserProfile(data.name, data.photoURL)
//                     .then(() => {
//                         const saveUser = { name: data.name, email: data.email }
//                         fetch('http://localhost:5000/users', {
//                             method: 'POST',
//                             headers: {
//                                 'content-type': 'application/json'
//                             },
//                             body: JSON.stringify(saveUser)
//                         })
//                             .then(res => res.json())
//                             .then(data => {
//                                 if (data.insertedId) {
//                                     reset();
//                                     Swal.fire({
//                                         position: 'top-end',
//                                         icon: 'success',
//                                         title: 'User created successfully.',
//                                         showConfirmButton: false,
//                                         timer: 1500
//                                     });
//                                     navigate('/');
//                                 }
//                             })



//                     })
//                     .catch(error => console.log(error))
//             })
//     };

//     return (
//         <>
//             <Helmet>
//                 <title>Bistro Boss | Sign Up</title>
//             </Helmet>
//             <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//                 <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring  ring-purple-600 lg:max-w-xl">
//                     <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
//                         Sign Up
//                     </h1>
//                     <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
//                         <div className="mb-2">
//                             <label
//                                 for="name"
//                                 className="block text-sm font-semibold text-gray-800"
//                             >
//                                 Name
//                             </label>
//                             <input
//                                 type="text"
//                                 {...register("name", { required: true })}
//                                 className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                             />
//                             {errors.name && <span className="text-red-600">Name is required</span>}
//                         </div>
//                         <div className="mb-2">
//                             <label
//                                 for="photo"
//                                 className="block text-sm font-semibold text-gray-800"
//                             >
//                                 Photo Url
//                             </label>
//                             <input
//                                 type="text"
//                                 {...register("photoURL", { required: true })}
//                                 className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                             />
//                             {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
//                         </div>
//                         <div className="mb-2">
//                             <label
//                                 for="email"
//                                 className="block text-sm font-semibold text-gray-800"
//                             >
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 {...register("email", { required: true })}
//                                 className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                             />
//                             {errors.email && <span className="text-red-600">Email is required</span>}
//                         </div>
//                         <div className="mb-2">
//                             <label
//                                 for="password"
//                                 className="block text-sm font-semibold text-gray-800"
//                             >
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 onChange={e => setPassword(e.target.value)}
//                                 {...register("password", {
//                                     required: true,
//                                     minLength: 6,
//                                     maxLength: 20,
//                                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
//                                 })}
//                                 className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                             />
//                             {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
//                             {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
//                             {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
//                             {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
//                         </div>
//                         <div className="mb-2">
//                             <label
//                                 for="c-password"
//                                 className="block text-sm font-semibold text-gray-800"
//                             >
//                                 Confirm Password
//                             </label>
//                             <input
//                                 type="password"
//                                 {...register("confirmPassword", {
//                                     required: true,
//                                     validate: (value) =>
//                                         value === password || "Passwords do not match",
//                                 })}
//                                 className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                             />
//                             {errors.confirmPassword?.type === "required" && (
//                                 <p className="text-red-600">Confirm Password is required</p>
//                             )}
//                             {errors.confirmPassword?.type === "validate" && (
//                                 <p className="text-red-600">{errors.confirmPassword.message}</p>
//                             )}
//                         </div>
//                         <a
//                             href="#"
//                             className="text-xs text-purple-600 hover:underline"
//                         >
//                             Forget Password?
//                         </a>
//                         <div className="mt-6">
//                             <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
//                                 Sign Up
//                             </button>
//                         </div>
//                     </form>

//                     <p className="mt-8 text-xs font-light text-center text-gray-700">
//                         {" "}
//                         Don't have an account?{" "}
//                         <a
//                             href="#"
//                             className="font-medium text-purple-600 hover:underline"
//                         >
//                             Sign up
//                         </a>
//                     </p>
//                     <SocialLogin></SocialLogin>
//                 </div>

//             </div>
//         </>
//     );
// };

// export default SignUp;


{/* <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Sign up now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
        </form>
        <p><small>Already have an account <Link to="/login">Login</Link></small></p>
        <SocialLogin></SocialLogin>
    </div>
</div>
</div> */}


import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [password, setPassword] = useState(""); // Add state for password

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email,role:"student"};
                        fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify(saveUser),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User created successfully.",
                                        showConfirmButton: false,
                                        timer: 1500,
                                    });
                                    navigate("/");
                                }
                            })
                            .catch((error) => console.log(error));
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring  ring-purple-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                        Sign Up
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                        <div className="mb-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                {...register("name", { required: true })}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.name && (
                                <span className="text-red-600">Name is required</span>
                            )}
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="photo"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Photo Url
                            </label>
                            <input
                                type="text"
                                {...register("photoURL", { required: true })}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.photoURL && (
                                <span className="text-red-600">Photo URL is required</span>
                            )}
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.email && (
                                <span className="text-red-600">Email is required</span>
                            )}
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                })}
                                onChange={(e) => setPassword(e.target.value)} // Store the password value
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.password?.type === "required" && (
                                <p className="text-red-600">Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password must be 6 characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-600">
                                    Password must be less than 20 characters
                                </p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">
                                    Password must have one Uppercase one lower case, one number
                                    and one special character.
                                </p>
                            )}
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="c-password"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                {...register("cPassword", {
                                    required: true,
                                    validate: (value) => value === password, // Compare with password value
                                })}
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.cPassword?.type === "required" && (
                                <p className="text-red-600">Confirm Password is required</p>
                            )}
                            {errors.cPassword?.type === "validate" && (
                                <p className="text-red-600">Passwords must match</p>
                            )}
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Already Have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-purple-600 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </>
    );
};

export default SignUp;
