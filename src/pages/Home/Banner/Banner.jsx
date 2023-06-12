

import banner1 from './../../../assets/banner/b-1.jpg';
import banner2 from './../../../assets/banner/b-2.jpg';
import banner3 from './../../../assets/banner/b-3.jpg';

const Slider = () => {
    return (
        <div className="carousel w-full h-[95vh] relative">
            <div className="gradient-overlay absolute inset-0"></div>
            <div id="slide1" className="carousel-item relative w-full">
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-purple-800">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-purple-800">❯</a>
                </div>
                <img src={banner1} className="w-full" />
                <div className="slide-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 className='text-2xl font-semibold'><span className='text-orange-600'>Serenity Yoga:</span> <span className='text-purple-600'>Discover Inner Peace and Balance.</span></h2>
                    <p className='text-xl text-blue-700'>Experience the transformative power of yoga and meditation in a serene and supportive environment.</p>
                    <div className="slide-buttons mt-4">
                        <a href="#contact" className="btn bg-orange-500  mr-2">Contact Us</a>
                        <a href="#video" className="btn bg-purple-700">View Video</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-purple-800">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-purple-800">❯</a>
                </div>
                <div className="slide-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 className='text-2xl font-semibold'><span className='text-orange-600'>Mindful Asanas:</span> <span className='text-purple-600'>Embrace Wellness and Harmony.</span></h2>
                    <p className='text-xl text-blue-700'>Immerse yourself in the world of mindful asanas and unlock the true potential of your mind and body.</p>
                    <div className="slide-buttons mt-4">
                        <a href="#contact" className="btn bg-orange-500  mr-2">Contact Us</a>
                        <a href="#video" className="btn bg-purple-700 ">View Video</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-purple-800">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-purple-800">❯</a>
                </div>
                <div className="slide-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h2 className='text-2xl font-semibold'><span className='text-orange-600'>Transcend Meditation:</span> <span className='text-purple-600'>Awaken Your Inner Stillness.</span></h2>
                    <p className='text-xl text-blue-700'>Step into a realm of tranquility and tap into the profound benefits of meditation. </p>
                    <div className="slide-buttons mt-4">
                        <a href="#contact" className="btn  mr-2 bg-orange-500">Contact Us</a>
                        <a href="#video" className="btn bg-purple-700">View Video</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
