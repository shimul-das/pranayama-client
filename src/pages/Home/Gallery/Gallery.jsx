

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "tailwindcss/tailwind.css";

const Gallery = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const zoomValue = useMotionValue(1);

    const handleZoom = (event, zoomIn) => {
        event.preventDefault();
        const zoomAmount = zoomIn ? 1.2 : 0.8;
        zoomValue.set(zoomAmount);
    };

    const galleryItems = [
        {
            image: "https://img.freepik.com/free-photo/one-hiking-lifestyle-summer-yoga_1150-1002.jpg",
            caption: "Blissful Breath Yoga",
        },
        {
            image: "https://img.freepik.com/free-photo/adult-woman-practicing-yoga-home_52683-107801.jpg",
            caption: "Inner Harmony Meditation",
        },
        {
            image: "https://img.freepik.com/free-photo/woman-yoga-mat-relax-park-young-sporty-asian-woman-practicing-yoga-doing-headstand-exercise-working-out-wearing-sportswear-pants-top_1150-44671.jpg",
            caption: "Tranquil Lotus Yoga",
        },
        {
            image: "https://img.freepik.com/free-photo/meditating-peace-sun-meditate-wellness_1253-755.jpg",
            caption: "Zen Mindfulness Meditation",
        },
        {
            image: "https://img.freepik.com/free-photo/young-adults-hiking-serene-autumn-forest-generated-by-ai_188544-26130.jpg",
            caption: "Sacred Serenity Yoga",
        },
        {
            image: "https://img.freepik.com/free-photo/fit-black-woman-practicing-yoga-sitting-with-legs-crossed-sportive-top-leggins-lotus-pose-practicing-calm-mind-harmony-no-stress-life-home-living-room_482257-16235.jpg",
            caption: "Enlightened Soul Meditation",
        },
        {
            image: "https://img.freepik.com/free-photo/young-woman-horse-rider-pose-grey-studio-background_1163-2460.jpg",
            caption: "Harmony Flow Yoga",
        },
        {
            image: "https://img.freepik.com/free-vector/silhouette-woman-yoga-pose-sunset-sky_1048-14228.jpg",
            caption: "Peaceful Presence Meditation",
        },
        {
            image: "https://img.freepik.com/free-photo/group-young-sporty-people-sitting-padmasana-pose_1163-4126.jpg",
            caption: "Radiant Zen Yoga",
        },
    ];

    return (
        <>
            <h1 className="text-3xl my-10 font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
                Gallery
            </h1>
            <motion.div
                className="flex flex-wrap justify-center mx-2 sm:mx-4 md:mx-8 lg:mx-10 xl:mx-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mx-2 my-4"
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.9 }}
                        style={{ scale: zoomValue }}
                        onDoubleClick={(event) => handleZoom(event, true)}
                        onContextMenu={(event) => handleZoom(event, false)}
                    >
                        <motion.img
                            src={item.image}
                            alt={item.caption}
                            className="w-full"
                            whileHover={{ scale: 1.1, filter: "brightness(0.8)" }}
                            whileTap={{ scale: 0.9 }}
                        />
                        <div className="text-center mt-2 font-semibold text-[#179e91]">{item.caption}</div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default Gallery;
