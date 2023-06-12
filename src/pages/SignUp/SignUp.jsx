


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

    const [password, setPassword] = useState("");
    const [error, seterror] = useState('') // Add state for password

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, image: data.photoURL, role: "student" };
                        fetch("https://pranayama-server.vercel.app/users", {
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
            .catch((error) => seterror(error));
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="relative my-3 flex flex-col justify-center min-h-screen overflow-hidden">
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
                    {error && (
                        <p className="text-red-600">{error.message}</p>
                    )}
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
