
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaAtlas, FaOdnoklassniki, FaBookOpen, FaDollarSign } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    const navigate = useNavigate();

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-[#7E22CE]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-[#F79256]">
                <div className="rounded-full overflow-hidden mx-auto w-32 h-32">
                    <img src={user.photoURL} alt="Image" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                <p className="text-lg text-[white] mt-4">{user.displayName}</p>
                <p className="text-base text-[white]">{user.email}</p>
                <hr className="m-2"></hr>
                </div>
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminhome">
                                    <FaHome></FaHome> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageclasses">
                                    <FaBook></FaBook> Manage Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allusers">
                                    <FaUsers></FaUsers> All Users
                                </NavLink>
                            </li>
                        </>
                    ) : isStudent ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/userhome">
                                    <FaHome></FaHome> Student Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myselectedclass">
                                    <FaCalendarAlt></FaCalendarAlt> My Selected Class
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myenrolledclass">
                                    <FaWallet></FaWallet>My Enrolled Class
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/paymenthistory">
                                    <FaDollarSign></FaDollarSign>Payment History
                                </NavLink>
                            </li>
                        </>
                    ) : isInstructor ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/instructorhome">
                                    <FaHome></FaHome> Instructor Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addclass">
                                    <FaAtlas></FaAtlas> Add Classes
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myclasses">
                                    <FaBook></FaBook> My Classes
                                </NavLink>
                            </li>

                        </>
                    ) : (
                        <>
                            {/* Default menu items for other roles */}
                        </>
                    )}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/instructors">
                            <FaOdnoklassniki></FaOdnoklassniki> Instructors
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/approvedclass">
                            <FaBookOpen></FaBookOpen> Classes
                        </NavLink>
                    </li>
                    <li>
                        <button className="btn bg-[#278066]" onClick={handleLogOut}>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
