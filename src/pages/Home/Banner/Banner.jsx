// import banner1 from './../../../assets/banner/b-1.jpg';
// import banner2 from './../../../assets/banner/b-2.jpg';
// import banner3 from './../../../assets/banner/b-3.jpg';

// const Slider = () => {


//     return (
//         <div className="carousel w-full h-[95vh]">
//             <div id="slide1" className="carousel-item relative w-full">
//                 <img src={banner1} className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide3" className="btn btn-circle">❮</a>
//                     <a href="#slide2" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide2" className="carousel-item relative w-full">
//                 <img src={banner2} className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide1" className="btn btn-circle">❮</a>
//                     <a href="#slide3" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide3" className="carousel-item relative w-full">
//                 <img src={banner3} className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide2" className="btn btn-circle">❮</a>
//                     <a href="#slide1" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//             <div id="slide4" className="carousel-item relative w-full">
//                 <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
//                 <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//                     <a href="#slide3" className="btn btn-circle">❮</a>
//                     <a href="#slide1" className="btn btn-circle">❯</a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Slider;

import banner1 from './../../../assets/banner/b-1.jpg';
import banner2 from './../../../assets/banner/b-2.jpg';
import banner3 from './../../../assets/banner/b-3.jpg';

const Slider = () => {
    return (
        <div className="carousel w-full h-[95vh] relative">
            <div className="gradient-overlay absolute inset-0"></div>
            <div id="slide1" className="carousel-item relative w-full">
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <img src={banner1} className="w-full" />
                <div className="slide-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2>Title 1</h2>
                    <p>Description 1</p>
                    <div className="slide-buttons mt-4">
                        <a href="#contact" className="btn  mr-2">Contact Us</a>
                        <a href="#video" className="btn ">View Video</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="slide-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2>Title 2</h2>
                    <p>Description 2</p>
                    <div className="slide-buttons mt-4">
                        <a href="#contact" className="btn  mr-2">Contact Us</a>
                        <a href="#video" className="btn ">View Video</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="slide-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2>Title 3</h2>
                    <p>Description 3</p>
                    <div className="slide-buttons mt-4">
                        <a href="#contact" className="btn  mr-2">Contact Us</a>
                        <a href="#video" className="btn ">View Video</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
