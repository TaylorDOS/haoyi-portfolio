"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <div className="flex flex-col lg:flex-row mx-auto relative lg:h-[60vh]">
                    <div className="w-full lg:w-2/3 flex flex-col justify-center text-center lg:text-left z-10 lg:items-start">
                        <h1 className="text-gray-800 font-bold text-4xl lg:text-6xl tracking-tight">
                            <div className="mt-8 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Hello, I&apos;m</div>
                            <TypeAnimation
                                sequence={[
                                    "Hao Yi",
                                    3000,
                                    "Product Designer",
                                    1500,
                                    "Software Developer",
                                    1500,
                                    "Interaction Designer",
                                    1500,
                                    "Visual Storyteller",
                                    1500
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="text-gray-600 text-md my-2 lg:text-lg">
                            graduating Computer Science & Design student based in Singapore
                        </p>
                        <div className="z-10 relative">
                            <Link
                                href="https://www.linkedin.com/in/tanhaoyi"
                                className="px-6 inline-flex items-center justify-center py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white transition-all duration-300 ease-in-out hover:from-secondary-500 hover:to-primary-500 hover:shadow-lg"
                            >
                                <FaLinkedin className="text-lg mr-2" />
                                <span>Connect</span>
                            </Link>
                            <Link
                                href="https://drive.google.com/file/d/1qmrUKa-6gkuHnOwZF0hlwsIffA9Xciz6/view?usp=sharing"
                                className="p-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mt-3 transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-secondary-500 hover:to-primary-500 hover:shadow-lg"
                            >
                                <span className="block rounded-full px-5 py-2 bg-white">
                                    Resume
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative lg:w-1/3 flex items-center justify-center mt-8 lg:mt-0">
                        <div className="absolute top-1/4 left-1/3 h-full aspect-square bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob z-0"></div>
                        <div className="absolute top-1/4 h-full aspect-square bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000 z-0"></div>
                        <div className="absolute bottom-1/4 right-1/3 h-full aspect-square bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000 z-0"></div>
                        <Image
                            src="/images/haoyi.png"
                            alt="hero image"
                            className="relative aspect-square object-cover rounded-full z-10"
                            width={300}
                            height={300}
                        />
                    </div>

                </div>
            </motion.div>
        </div>
    );
}

export default HeroSection;
