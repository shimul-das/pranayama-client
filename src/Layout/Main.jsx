// import { Outlet, useLocation } from "react-router-dom";
// import Footer from "../pages/Shared/Footer/Footer";
// import NavBar from "../pages/Shared/NavBar/NavBar";
// import { useState } from "react";


// const Main = () => {
//     const [darkMode, setDarkMode] = useState(false);

//     const handleDarkModeToggle = () => {
//       setDarkMode(!darkMode);
//     };
//     const location = useLocation();
    
//     // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

//     return (
//         <div className={`bg-${darkMode ? 'gray-900' : 'white'}`}>
//             <NavBar darkMode={darkMode} toggleDarkMode={handleDarkModeToggle}></NavBar>
//             <Outlet darkMode={darkMode}></Outlet>
//             <Footer darkMode={darkMode}></Footer>
//         </div>
//     );
// };

// export default Main;

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { useState } from "react";

const Main = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
      setDarkMode(!darkMode);
    };

    const location = useLocation();
    
    return (
        <div className={`bg-${darkMode ? 'gray-900' : 'white'}`}>
            <NavBar darkMode={darkMode} toggleDarkMode={handleDarkModeToggle}></NavBar>
            <Outlet />
            <Footer darkMode={darkMode}></Footer>
        </div>
    );
};

export default Main;
