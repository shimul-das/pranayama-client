import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
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
          path: 'menu', 
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
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
          path: 'mycart', 
          element: <MyCart></MyCart>
        },
        {
          path:'payment',
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
          path: 'addItem',
          element: <AddItem></AddItem>
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