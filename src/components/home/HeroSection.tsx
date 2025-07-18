// import React, { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";

// "use client"
import Link from "next/link.js";


export default function HeroSection() {
    // const [scrollY, setScrollY] = useState(0);
    // const [count1, setCount1] = useState(0);
    // const [count2, setCount2] = useState(0);
    // const [count3, setCount3] = useState(0);
    // const statsRef = useRef(null);
    // const statsInView = useRef(false);

    // Responsive floating shapes config

    // const shapes = [
    //     {
    //         size: "w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40",
    //         color: "bg-blue-500",
    //         x: [-40, 30],
    //         y: [-30, 30],
    //         top: "23%",
    //         left: "5%",
    //         duration: 4,
    //         responsive: "",
    //     },
    //     {
    //         size: "w-12 h-12 sm:w-16 sm:h-16 md:w-28 md:h-28",
    //         color: "bg-yellow-400",
    //         x: [10, -10],
    //         y: [15, -15],
    //         top: "60%",
    //         left: "80%",
    //         duration: 8,
    //         responsive: "hidden md:block",
    //     },
    //     {
    //         size: "w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-32",
    //         color: "bg-red-400",
    //         x: [-40, 40],
    //         y: [-20, 20],
    //         top: "40%",
    //         left: "75%",
    //         duration: 7,
    //         responsive: "",
    //     },
    //     {
    //         size: "w-10 h-10 sm:w-14 sm:h-14 md:w-24 md:h-24",
    //         color: "bg-green-400",
    //         x: [15, -15],
    //         y: [-15, 15],
    //         top: "60%",
    //         left: "10%",
    //         duration: 5,
    //         responsive: "hidden md:block", // Hide on small screens, show on md and up
    //     },
    //     {
    //         size: "w-14 h-14 sm:w-20 sm:h-20 md:w-36 md:h-36",
    //         color: "bg-purple-400",
    //         x: [20, -20],
    //         y: [10, -10],
    //         top: "20%",
    //         left: "20%",
    //         duration: 6,
    //         responsive: "",
    //     },
    // ];

    // const FloatingShape = ({ size, color, x, y, top, left, duration }) => (
    //     <motion.div
    //         className={`absolute ${size} rounded-full ${color} opacity-50`}
    //         style={{ top, left }}
    //         animate={{
    //             x: x.map((val) => `${val}px`),
    //             y: y.map((val) => `${val}px`),
    //         }}
    //         transition={{
    //             repeat: Number.POSITIVE_INFINITY,
    //             repeatType: "mirror",
    //             duration,
    //             ease: "easeInOut",
    //         }}
    //     />
    // );

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollY(window.scrollY);
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             const [entry] = entries;
    //             if (entry.isIntersecting && !statsInView.current) {
    //                 statsInView.current = true;

    //                 const duration = 2000;
    //                 const interval = 20;
    //                 const steps = duration / interval;

    //                 const target1 = 15;
    //                 const target2 = 500;
    //                 const target3 = 25;

    //                 const step1 = target1 / steps;
    //                 const step2 = target2 / steps;
    //                 const step3 = target3 / steps;

    //                 let current1 = 0;
    //                 let current2 = 0;
    //                 let current3 = 0;

    //                 const timer = setInterval(() => {
    //                     current1 += step1;
    //                     current2 += step2;
    //                     current3 += step3;

    //                     setCount1(Math.min(Math.floor(current1), target1));
    //                     setCount2(Math.min(Math.floor(current2), target2));
    //                     setCount3(Math.min(Math.floor(current3), target3));

    //                     if (
    //                         Math.floor(current1) >= target1 &&
    //                         Math.floor(current2) >= target2 &&
    //                         Math.floor(current3) >= target3
    //                     ) {
    //                         clearInterval(timer);
    //                     }
    //                 }, interval);
    //             }
    //         },
    //         { threshold: 0.5 }
    //     );

    //     if (statsRef.current) {
    //         observer.observe(statsRef.current);
    //     }

    //     return () => {
    //         if (statsRef.current) {
    //             observer.unobserve(statsRef.current);
    //         }
    //     };
    // }, []);

    return (
        <div className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_4px),linear-gradient(to_bottom,#80808012_1px,transparent_4px)] bg-[size:28px_28px] pointer-events-none' flex flex-col sm:flex-row justify-end px-2 sm:px-12">

            {/* Hero Section */}
            <section className="min-h-[80vh] w-full sm:w-[50%] text-black relative py-12 md:py-24 px-4 sm:mt-15 mt-15 text-center">
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-8"
                >
                    Early Fraud Detection to Reduce Loss & Risk
                </h1>
                <p
                    className="text-base sm:text-lg md:text-xl text-gray-500 mb-6 md:mb-10"
                >
                    InsightAI empowers financial institutions and fintechs to prevent revenue loss, reduce false positives, and stay compliant with real-time fraud detection and adaptive risk management.
                </p>

                <div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link href="/events">
                        <div
                            className="px-6 sm:px-8 py-2 flex items-center justify-center bg-black text-white rounded-full hover:bg-slate-800"
                        >
                            <span>Book a Demo</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </div>
                    </Link>

                    <Link href="/signup">
                        <div
                            className="px-6 sm:px-8 py-2 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-100"
                        >
                            Explore Products
                        </div>
                    </Link>
                </div>
            </section>

            <section className="hidden sm:block w-[50%] text-black relative py-12 md:py-24 px-4 sm:mt-15 mt-15 text-center">
                <div className="h-full rounded-xl border border-gray-300 shadow-lg overflow-hidden bg-white">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-300">
                        <div className="flex space-x-2">
                            <span className="w-3 h-3 bg-red-500 rounded-full" />
                            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                            <span className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                        <div className="flex-1 mx-4">
                            <div className="bg-white border border-gray-300 text-gray-600 text-sm px-3 py-1 rounded-md truncate">
                                Insightai.in
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="bg-white h-full w-full">
                        <div>InsightAI</div>
                    </div>
                </div>
            </section>

            {/* <section className="text-black relative py-12 md:py-24 px-4 sm:mt-15 mt-15 text-center">
                <div className="max-w-3xl mx-auto">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 md:mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Early Fraud Detection to Reduce Loss & Risk
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-500 mb-6 md:mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                    InsightAI empowers financial institutions and fintechs to prevent revenue loss, reduce false positives, and stay compliant with real-time fraud detection and adaptive risk management.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <Link href="/events">
                            <motion.a
                                className="px-6 sm:px-8 py-2 flex items-center justify-center bg-black text-white rounded-full hover:bg-slate-800"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Book a Demo</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                >
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </motion.a>
                        </Link>

                        <Link href="/signup">
                            <motion.a
                                className="px-6 sm:px-8 py-2 flex items-center justify-center border border-gray-500 rounded-full hover:bg-gray-100"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Products
                            </motion.a>
                        </Link>
                    </motion.div>
                </div>
            </section> */}
        </div>
    );
}