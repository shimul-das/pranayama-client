// import { Helmet } from "react-helmet-async";
// import Banner from "../Banner/Banner";
// import Gallery from "../Gallery/Gallery";
// import PopularClasses from "../Classes/PopularClasses";
// import PopularInstructors from "../Instructor/PopularInstructors";
// import { useState } from "react";
// import { useEffect } from "react";

// const Home = ({darkMode}) => {
//     useEffect(() => {
//         const body = document.querySelector('body');
//         body.classList.toggle('dark', darkMode);
//     }, [darkMode]);

    
//     return (
//         <div>
//             <Helmet>
//                 <title>Pranayama | Home</title>
//             </Helmet>
//             <Banner></Banner>
//             <PopularClasses darkMode={darkMode}></PopularClasses>
//             <PopularInstructors></PopularInstructors>
//             <Gallery></Gallery>
//         </div>
//     );
// };

// export default Home;


import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import PopularClasses from "../Classes/PopularClasses";
import PopularInstructors from "../Instructor/PopularInstructors";
import { useEffect } from "react";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Pranayama | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;
