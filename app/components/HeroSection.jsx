"use client"
import React from "react"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="grid lg:grid-cols-3 mx-auto gap-8">
            <div className="flex-1 col-span-1 lg:col-span-2 items-center justify-center text-center lg:text-left">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}>
                    <h1 className="text-gray-800 text-4xl lg:text-6xl font-sfprobold tracking-tight">
                        <div className="mt-8 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Hello, I&apos;m</div>
                        <TypeAnimation
                            sequence={[
                                "Hao Yi (Tan)",
                                3000,
                                "Web Developer",
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
                        seeking roles in product design & development lifecycle.
                    </p>
                    <div className="mx-4 text-black">
                        <Link
                            href="/#contact"
                            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white"
                        >
                            Hire Me
                        </Link>
                        <Link
                            href="https://drive.google.com/file/d/1qmrUKa-6gkuHnOwZF0hlwsIffA9Xciz6/view?usp=sharing"
                            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 mt-3"
                        >
                            <span className="block bg-white hover:bg-slate-100 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </Link>
                    </div>
                </motion.div>
                
            </div>
            <div className="w-full flex items-center justify-center">
                    <Image src="/images/AboutMe.png"
                        alt="hero image"
                        className="relative aspect-square object-cover rounded-full"
                        width={300}
                        height={300}
                    />
                </div>
        </div>
    )
}

export default HeroSection