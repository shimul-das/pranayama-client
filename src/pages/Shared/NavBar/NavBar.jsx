// import { useContext } from "react";
// import { FaShoppingCart } from 'react-icons/fa';
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
// import useCart from "../../../hooks/useCart";
// import useAdmin from "../../../hooks/useAdmin";

// const NavBar = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const [cart] = useCart();
//     const [isAdmin]=useAdmin()

//     const handleLogOut = () => {
//         logOut()
//             .then(() => { })
//             .catch(error => console.log(error));
//     }

//     const navOptions = <>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/menu">Our Menu</Link></li>
//         <li><Link to="/order/salad">Order Food</Link></li>
//         {
//             isAdmin ? <li><Link to='/dashboard/adminhome'>Dashboard</Link></li> 
//             :
//             <li><Link to='/dashboard/userhome'>Dashboard</Link></li>
//         }

//         <li>
//             <Link to="/dashboard/mycart">
//                 <button className="btn gap-2">
//                     <FaShoppingCart></FaShoppingCart>
//                     <div className="badge badge-secondary">+{cart?.length || 0}</div>
//                 </button>
//             </Link>
//         </li>
//         {
//             user ? <>
//                 <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
//             </> : <>
//                 <li><Link to="/login">Login</Link></li>
//             </>
//         }
//     </>

//     return (
//         <>
//             <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                             {navOptions}
//                         </ul>
//                     </div>
//                     <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {navOptions}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <a className="btn">Get started</a>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default NavBar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useAdmin from "../../../hooks/useAdmin";
// import { useContext } from 'react';
// import { AuthContext } from '../../../providers/AuthProvider';
// import useravatar from './../../../assets/user-avatar.png';
// import logo from './../../../assets/logo-.png';
// import useStudent from '../../../hooks/useStudent';
// import useInstructor from '../../../hooks/useInstructor';



// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

//     const handleMenuToggle = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const handleUserMenuToggle = () => {
//         setIsUserMenuOpen(!isUserMenuOpen);
//     };

//     const { user, logOut } = useContext(AuthContext);
//     const [isAdmin] = useAdmin()
//     const [isStudent]=useStudent()
//     const [isInstructor]=useInstructor()

//     const handleLogOut = () => {
//         logOut()
//             .then(() => { })
//             .catch(error => console.log(error));
//     }

//     return (
//         <nav className="bg-gray-900">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     <div className="flex items-center">
//                         <div className="flex-shrink-0">
//                             <img
//                                 className="h-15 w-25"
//                                 src={logo}
//                                 alt="Logo"
//                             />
//                         </div>
//                         <div className="hidden md:block">
//                             <div className="ml-10 flex items-baseline space-x-4">
//                                 <Link
//                                     to="/"
//                                     className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                                 >
//                                     Home
//                                 </Link>
//                                 <Link
//                                     to="/about"
//                                     className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                                 >
//                                     Instructors
//                                 </Link>
//                                 <Link
//                                     to="/services"
//                                     className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                                 >
//                                     Classes
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="hidden md:block">
//                         <div className="ml-4 flex items-center md:ml-6">
//                             {user && (
//                                 <>
//                                     <button
//                                         onClick={handleUserMenuToggle}
//                                         className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                                     >
//                                         <span className="sr-only">Open user menu</span>
//                                         <img
//                                             className="h-8 w-8 rounded-full"
//                                             src={user.photoURL ? user.photoURL : useravatar}
//                                             alt="User"
//                                         />
//                                     </button>
//                                     {isUserMenuOpen && (
//                                         <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
//                                             <Link
//                                                 to="/dashboard"
//                                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                             >
//                                                 Dashboard
//                                             </Link>
//                                             <Link
//                                                 onClick={handleLogOut}
//                                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                             >
//                                                 Logout
//                                             </Link>
//                                         </div>
//                                     )}
//                                 </>
//                             )}
//                             {!user && (
//                                 <Link
//                                     to="/login"
//                                     className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                                 >
//                                     Login
//                                 </Link>
//                             )}
//                         </div>
//                     </div>
//                     <div className="-mr-2 flex md:hidden">
//                         <button
//                             onClick={handleMenuToggle}
//                             type="button"
//                             className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                             aria-controls="mobile-menu"
//                             aria-expanded="false"
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {!isMenuOpen ? (
//                                 <svg
//                                     className="block h-6 w-6"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     aria-hidden="true"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                 </svg>
//                             ) : (
//                                 <svg
//                                     className="block h-6 w-6"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     aria-hidden="true"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             {isMenuOpen && (
//                 <div className="md:hidden" id="mobile-menu">
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                         <Link
//                             to="/"
//                             className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                         >
//                             Home
//                         </Link>
//                         <Link
//                             to="/about"
//                             className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                         >
//                             Instructors
//                         </Link>
//                         <Link
//                             to="/services"
//                             className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                         >
//                             Classes
//                         </Link>
//                         {
//                             user && isAdmin ? (
//                                 <li>
//                                     <Link to="/dashboard/adminhome">Dashboard</Link>
//                                 </li>
//                             ) : user && isStudent ? (
//                                 <li>
//                                     <Link to="/dashboard/userhome">Dashboard</Link>
//                                 </li>
//                             ) : user && isInstructor ? (
//                                 <li>
//                                     <Link to="/dashboard/instructorhome">Dashboard</Link>
//                                 </li>
//                             ) : null
//                         }

//                         {!user && (
//                             <Link
//                                 to="/login"
//                                 className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                             >
//                                 Login
//                             </Link>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useAdmin from "../../../hooks/useAdmin";
// import { useContext } from 'react';
// import { AuthContext } from '../../../providers/AuthProvider';
// import useravatar from './../../../assets/user-avatar.png';
// import logo from './../../../assets/logo-.png';
// import useStudent from '../../../hooks/useStudent';
// import useInstructor from '../../../hooks/useInstructor';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleUserMenuToggle = () => {
//     setIsUserMenuOpen(!isUserMenuOpen);
//   };

//   const { user, logOut } = useContext(AuthContext);
//   const [isAdmin] = useAdmin();
//   const [isStudent] = useStudent();
//   const [isInstructor] = useInstructor();

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch(error => console.log(error));
//   };

//   return (
//     <nav className="bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <img className="h-15 w-25" src={logo} alt="Logo" />
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 <Link
//                   to="/"
//                   className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/instructors"
//                   className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Instructors
//                 </Link>
//                 <Link
//                   to="/approvedclass"
//                   className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Classes
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-4 flex items-center md:ml-6">
//               {user && (
//                 <>
//                   <button
//                     onClick={handleUserMenuToggle}
//                     className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                   >
//                     <span className="sr-only">Open user menu</span>
//                     <img
//                       className="h-8 w-8 rounded-full"
//                       src={user.photoURL ? user.photoURL : useravatar}
//                       alt="User"
//                     />
//                   </button>
//                   {isUserMenuOpen && (
//                     <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
//                       {isAdmin && (
//                         <Link
//                           to="/dashboard/adminhome"
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         >
//                           Dashboard
//                         </Link>
//                       )}
//                       {isStudent && (
//                         <Link
//                           to="/dashboard/userhome"
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         >
//                           Dashboard
//                         </Link>
//                       )}
//                       {isInstructor && (
//                         <Link
//                           to="/dashboard/instructorhome"
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         >
//                           Dashboard
//                         </Link>
//                       )}
//                       <Link
//                         onClick={handleLogOut}
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                       >
//                         Logout
//                       </Link>
//                     </div>
//                   )}
//                 </>
//               )}
//               {!user && (
//                 <Link
//                   to="/login"
//                   className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                 >
//                   Login
//                 </Link>
//               )}
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={handleMenuToggle}
//               type="button"
//               className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isMenuOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="md:hidden" id="mobile-menu">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/"
//               className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Home
//             </Link>
//             <Link
//               to="/instructors"
//               className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Instructors
//             </Link>
//             <Link
//               to="/approvedclass"
//               className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Classes
//             </Link>
//             {user && isAdmin && (
//               <Link
//                 to="/dashboard/adminhome"
//                 className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Dashboard
//               </Link>
//             )}
//             {user && isStudent && (
//               <Link
//                 to="/dashboard/userhome"
//                 className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Dashboard
//               </Link>
//             )}
//             {user && isInstructor && (
//               <Link
//                 to="/dashboard/instructorhome"
//                 className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Dashboard
//               </Link>
//             )}
//             {!user && (
//               <Link
//                 to="/login"
//                 className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useAdmin from "../../../hooks/useAdmin";
// import { useContext } from 'react';
// import { AuthContext } from '../../../providers/AuthProvider';
// import useravatar from './../../../assets/user-avatar.png';
// import logo from './../../../assets/logo-.png';
// import useStudent from '../../../hooks/useStudent';
// import useInstructor from '../../../hooks/useInstructor';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleUserMenuToggle = () => {
//     setIsUserMenuOpen(!isUserMenuOpen);
//   };

//   const { user, logOut } = useContext(AuthContext);
//   const [isAdmin] = useAdmin();
//   const [isStudent] = useStudent();
//   const [isInstructor] = useInstructor();

//   const handleLogOut = () => {
//     logOut()
//       .then(() => {})
//       .catch(error => console.log(error));
//   };

//   return (
//     <>
//       <nav className="bg-gray-900 relative z-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <img className="h-15 w-25" src={logo} alt="Logo" />
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <Link
//                     to="/"
//                     className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     to="/instructors"
//                     className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Instructors
//                   </Link>
//                   <Link
//                     to="/approvedclass"
//                     className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Classes
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-4 flex items-center md:ml-6">
//                 {user && (
//                   <>
//                     <button
//                       onClick={handleUserMenuToggle}
//                       className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                     >
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src={user.photoURL ? user.photoURL : useravatar}
//                         alt="User"
//                       />
//                     </button>
//                     {isUserMenuOpen && (
//                       <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-30">
//                         {isAdmin && (
//                           <Link
//                             to="/dashboard/adminhome"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                           >
//                             Dashboard
//                           </Link>
//                         )}
//                         {isStudent && (
//                           <Link
//                             to="/dashboard/userhome"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                           >
//                             Dashboard
//                           </Link>
//                         )}
//                         {isInstructor && (
//                           <Link
//                             to="/dashboard/instructorhome"
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                           >
//                             Dashboard
//                           </Link>
//                         )}
//                         <Link
//                           onClick={handleLogOut}
//                           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         >
//                           Logout
//                         </Link>
//                       </div>
//                     )}
//                   </>
//                 )}
//                 {!user && (
//                   <Link
//                     to="/login"
//                     className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Login
//                   </Link>
//                 )}
//               </div>
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 onClick={handleMenuToggle}
//                 type="button"
//                 className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isMenuOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//         {isMenuOpen && (
//           <div className="md:hidden" id="mobile-menu">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <Link
//                 to="/"
//                 className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/instructors"
//                 className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Instructors
//               </Link>
//               <Link
//                 to="/approvedclass"
//                 className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 Classes
//               </Link>
//             </div>
//             <div className="pt-4 pb-3 border-t border-gray-700">
//               <div className="flex items-center px-5">
//                 {user && (
//                   <>
//                     <div className="flex-shrink-0">
//                       <img
//                         className="h-10 w-10 rounded-full"
//                         src={user.photoURL ? user.photoURL : useravatar}
//                         alt="User"
//                       />
//                     </div>
//                     <div className="ml-3">
//                       <div className="text-base font-medium text-white">
//                         {user.displayName}
//                       </div>
//                       <div className="text-sm font-medium text-gray-400">
//                         {user.email}
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//               <div className="mt-3 px-2 space-y-1">
//                 {isAdmin && (
//                   <Link
//                     to="/dashboard/adminhome"
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
//                   >
//                     Dashboard
//                   </Link>
//                 )}
//                 {isStudent && (
//                   <Link
//                     to="/dashboard/userhome"
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
//                   >
//                     Dashboard
//                   </Link>
//                 )}
//                 {isInstructor && (
//                   <Link
//                     to="/dashboard/instructorhome"
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
//                   >
//                     Dashboard
//                   </Link>
//                 )}
//                 <Link
//                   onClick={handleLogOut}
//                   className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
//                 >
//                   Logout
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;


///////////////////

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAdmin from "../../../hooks/useAdmin";
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useravatar from './../../../assets/user-avatar.png';
import logo from './../../../assets/logo-.png';
import useStudent from '../../../hooks/useStudent';
import useInstructor from '../../../hooks/useInstructor';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();
  const [isInstructor] = useInstructor();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  };

  return (
    <nav className="bg-gray-400 relative z-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-15 w-25" src={logo} alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-purple-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/instructors"
                  className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Instructors
                </Link>
                <Link
                  to="/approvedclass"
                  className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Classes
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user && (
                <div className="relative">
                  <button
                    onClick={handleUserMenuToggle}
                    className="flex items-center focus:outline-none"
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.photoURL ? user.photoURL : useravatar}
                      alt="User"
                    />
                    <svg
                      className="ml-1 h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {isUserMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-30">
                      <div className="ml-3 p-2 border-b-2">
                        <div className="text-base font-medium text-black">
                          {user.displayName}
                        </div>
                        <div className="text-sm font-medium text-black">
                          {user.email}
                        </div>
                      </div>
                      {isAdmin && (
                        <Link
                          to="/dashboard/adminhome"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      )}
                      {isStudent && (
                        <Link
                          to="/dashboard/userhome"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      )}
                      {isInstructor && (
                        <Link
                          to="/dashboard/instructorhome"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      )}
                      <Link
                        onClick={handleLogOut}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {!user && (
                <Link
                  to="/login"
                  className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleMenuToggle}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/instructors"
              className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Instructors
            </Link>
            <Link
              to="/approvedclass"
              className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Classes
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              {user && (
                <>
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.photoURL ? user.photoURL : useravatar}
                      alt="User"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {user.displayName}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {user.email}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="mt-3 px-2 space-y-1">
              {isAdmin && (
                <Link
                  to="/dashboard/adminhome"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Dashboard
                </Link>
              )}
              {isStudent && (
                <Link
                  to="/dashboard/userhome"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Dashboard
                </Link>
              )}
              {isInstructor && (
                <Link
                  to="/dashboard/instructorhome"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Dashboard
                </Link>
              )}
              <Link
                onClick={handleLogOut}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
