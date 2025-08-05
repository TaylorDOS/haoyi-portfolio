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
                        <h1 className="text-gray-800 font-bold text-3xl lg:text-6xl tracking-tight">
                            <div className="mt-8 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Hello, I&apos;m</div>
                            <TypeAnimation
                                sequence={[
                                    "Hao Yi",
                                    3000,
                                    "Brand Consultant",
                                    1500,
                                    "System Designer",
                                    1500,
                                    "Web Developer",
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
                            Tech Consultant & Branding Strategist based in Singapore
                        </p>
                        <div className="z-10 relative flex flex-col lg:flex-row items-center justify-center gap-4">
                            <Link
                                href="/portfolio-tanhy.pdf"
                                download="portfolio-tanhy.pdf"
                                className="flex items-center justify-center px-6 py-3 w-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white transition-all duration-300 ease-in-out hover:from-secondary-500 hover:to-primary-500 hover:shadow-lg"
                            >
                                <span className="text-center">Portfolio</span>
                            </Link>

                            <Link
                                href="https://drive.google.com/file/d/1qmrUKa-6gkuHnOwZF0hlwsIffA9Xciz6/view?usp=sharing"
                                className="flex items-center justify-center px-6 py-3 w-full rounded-full bg-white transition-all duration-300 ease-in-out hover:from-secondary-500 hover:to-primary-500 hover:shadow-lg"
                            >
                                <span className="text-center">CV</span>
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
