import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome.jsx/AdminHome";
import Errorpage from "../Layout/ErrorPage";
import Error404 from "../pages/Error404/Error404";
import StudentRoute from "./StudentRoute";
import InstructorRoute from "./InstructorRoute";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import Instructors from "../pages/Instructors/Instructors";
import ApprovedClass from "../pages/ApprovedClass/ApprovedClass";
import MyselectedClass from "../pages/Dashboard/MyselectedClass/MyselectedClass";
import MyenrolledClass from "../pages/Dashboard/MyenrolledClass/MyenrolledClass";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
          path: 'instructors', 
          element: <Instructors></Instructors>
        },
        {
          path: 'approvedclass', 
          element: <ApprovedClass></ApprovedClass>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
      children: [
        {
          path:'userhome',
          element:<StudentRoute><UserHome></UserHome></StudentRoute>

        },
        {
          path:'myselectedclass',
          element:<StudentRoute><MyselectedClass></MyselectedClass></StudentRoute>

        },
        {
          path:'myenrolledclass',
          element:<StudentRoute><MyenrolledClass></MyenrolledClass></StudentRoute>

        },
        {
          path:'paymenthistory',
          element:<StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>

        },
        {
          path:'payment/:itemId',
          element:<Payment></Payment>

        },
        //admin routes
        {
          path:'adminhome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'allusers', 
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'manageclasses',
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        /////Instructor Route
        {
          path:'instructorhome',
          element:<InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
        },
        {
          path:"addclass",
          element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path:"myclasses",
          element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        }
      ]
    },
    {
      path: "/*",
        element: <Errorpage></Errorpage>,
        children:[
          {
            path:'/*',
            element:<Error404></Error404>
          }
        ]
      }
  ]);