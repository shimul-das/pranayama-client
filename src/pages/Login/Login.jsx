import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordInputType, setPasswordInputType] = useState("password");

    const from = location.state?.from?.pathname || "/";

    const  onSubmit  = (data) => {
        console.log(data.email, data.password);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error=>{
                setError(error)
            })
    }

    
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    setPasswordInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password"
    );
  };

  const PasswordIcon = showPassword ? AiFillEyeInvisible : AiFillEye;


    return (
        <>
            <Helmet>
                <title>Pranayama | Login</title>
            </Helmet>

            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring  ring-purple-600 lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                        Login
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6">

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
              <div className="relative">
                <input
                  type={passwordInputType}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <PasswordIcon
                  size={20}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              </div>
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
                        <a
                            href="#"
                            className="text-xs text-purple-600 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Login
                            </button>
                        </div>
                    </form>
                    {error && (
            <p className="text-red-600">{error.message}</p>
          )}

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Don't Have an account?{" "}
                        <Link
                            to="/signup"
                            className="font-medium text-purple-600 hover:underline"
                        >
                            signup
                        </Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </>
    );
};

export default Login;



// {/* <div className="hero min-h-screen bg-base-200">
// <div className="hero-content flex-col md:flex-row-reverse">
//     <div className="text-center md:w-1/2 lg:text-left">
//         <h1 className="text-5xl font-bold">Login now!</h1>
//         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//     </div>
//     <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
//         <form onSubmit={handleLogin} className="card-body">
//             <div className="form-control">
//                 <label className="label">
//                     <span className="label-text">Email</span>
//                 </label>
//                 <input type="email" name="email" placeholder="email" className="input input-bordered" />
//             </div>
//             <div className="form-control">
//                 <label className="label">
//                     <span className="label-text">Password</span>
//                 </label>
//                 <input type="password" name="password" placeholder="password" className="input input-bordered" />
//                 <label className="label">
//                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                 </label>
//             </div>
//             <div className="form-control">
//                 <label className="label">
//                     <LoadCanvasTemplate />
//                 </label>
//                 <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

//             </div>
//             {/* TODO: make button disabled for captcha */}
//             <div className="form-control mt-6">
//                 <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
//             </div>
//         </form>
//         <p><small>Already Have an Account Here? <Link to="/signup">Login</Link> </small></p>
//         <SocialLogin></SocialLogin>
//     </div>
// </div>
// </div> */}


// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { useForm } from "react-hook-form";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";
// import { AuthContext } from "../../providers/AuthProvider";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [passwordInputType, setPasswordInputType] = useState("password");

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const { signIn } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const from = location.state?.from?.pathname || "/";

//   const onSubmit = (data) => {
//     console.log(data.email, data.password);
//     signIn(data.email, data.password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         Swal.fire({
//           title: "User Login Successful.",
//           showClass: {
//             popup: "animate__animated animate__fadeInDown",
//           },
//           hideClass: {
//             popup: "animate__animated animate__fadeOutUp",
//           },
//         });
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         seterror(error);
//       });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//     setPasswordInputType((prevInputType) =>
//       prevInputType === "password" ? "text" : "password"
//     );
//   };

//   const PasswordIcon = showPassword ? AiFillEyeInvisible : AiFillEye;

//   return (
//     <>
//       <Helmet>
//         <title>Bistro Boss | Login</title>
//       </Helmet>

//       <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
//         <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring  ring-purple-600 lg:max-w-xl">
//           <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
//             Login
//           </h1>
//           <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            
//                          <div className="mb-2">
//                              <label
//                                  htmlFor="email"
//                                  className="block text-sm font-semibold text-gray-800"
//                              >
//                                 Email
//                              </label>
//                             <input
//                                  type="email"
//                                  {...register("email", { required: true })}
//                                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                              />
//                             {errors.email && (
//                                  <span className="text-red-600">Email is required</span>
//                              )}
//                          </div>
//             <div className="mb-2">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-semibold text-gray-800"
//               >
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={passwordInputType}
//                   {...register("password", {
//                     required: true,
//                     minLength: 6,
//                     maxLength: 20,
//                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
//                   })}
//                   className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
//                 />
//                 <PasswordIcon
//                   size={20}
//                   className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
//                   onClick={togglePasswordVisibility}
//                 />
//               </div>
//               {/* Rest of your error messages */}
//             </div>

//             {/* Rest of the form code... */}
//             <div className="mt-6">
//               <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
//                 Login
//               </button>
//             </div>
//           </form>

//           {/* Rest of your code... */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
