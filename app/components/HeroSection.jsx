"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="grid lg:grid-cols-3 mx-auto gap-8 relative">
            <div className="flex-1 col-span-1 lg:col-span-2 items-center justify-center text-center lg:text-left z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}>
                    <h1 className="text-gray-800 text-4xl lg:text-6xl font-sfprobold tracking-tight">
                        <div className="mt-8 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Hello, I&apos;m</div>
                        <TypeAnimation
                            sequence={[
                                "Hao Yi Tan",
                                3000,
                                "Product Designer",
                                1500,
                                "Software Developer",
                                1500,
                                "Interaction Designer",
                                1500,
                                "VR Developer",
                                1500
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-gray-600 text-lg my-2 lg:text-xl">
                        a final year Computer Science student based in Singapore
                    </p>
                    <div className="text-black z-20 relative">
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-secondary-500 hover:to-primary-500 hover:shadow-lg"
                        >
                            Connect with Me
                        </Link>
                        <Link
                            href="https://drive.google.com/file/d/1qmrUKa-6gkuHnOwZF0hlwsIffA9Xciz6/view?usp=sharing"
                            className="p-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mt-3 transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-secondary-500 hover:to-primary-500 hover:shadow-lg"
                        >
                            <span className="block bg-blue-100 rounded-full px-5 py-2 hover:bg-slate-100">
                                Download CV
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
            <div className="relative w-full flex items-center justify-center">
            <div className="absolute top-1/4 left-1/3 h-full w-full bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob z-0"></div>
                <div className="absolute top-1/4 h-full w-full bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000 z-0"></div>
                <div className="absolute bottom-1/4 right-1/3 h-full w-full bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000 z-0"></div>
                <Image
                    src="/images/AboutMe.png"
                    alt="hero image"
                    className="relative aspect-square object-cover rounded-full z-10"
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
}

export default HeroSection;
