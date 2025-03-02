"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const tabs = [
    { title: "Education", id: "education" },
    { title: "Experience", id: "experience" },
    { title: "Skills", id: "skills" },
];

const EducationCard = ({ logo, alt, title, description }) => {
    return (
        <div className="bg-white shadow-sm rounded-xl p-6 flex items-center space-x-6 border border-gray-200 transition-transform duration-300">
            <div className="w-1/6 relative h-12">
                <Image src={logo} alt={alt} fill className="object-contain rounded-lg" />
            </div>
            <div className="w-5/6">
                <h3 className="text-lg font-semibold text-primary-500">{title}</h3>
                <p className="text-sm text-gray-700">{description}</p>
            </div>
        </div>
    );
};

const CareerCard = ({ logo, alt, role, company, description }) => {
    return (
        <div className="bg-white shadow-sm rounded-xl p-6 flex items-center space-x-6 border border-gray-200 transition-transform duration-300">
            <div className="w-1/6 relative h-12">
                <Image src={logo} alt={alt} fill className="object-contain rounded-lg" />
            </div>
            <div className="w-5/6">
                <h3 className="text-lg font-semibold text-primary-500">{company}</h3>
                <p className="text-md font-medium text-gray-800">{role}</p>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
        </div>
    );
};

const TAB_CONTENT = {
    education: (
        <div className="flex flex-col gap-6">
            <EducationCard logo="/images/logos/sutd.png" alt="SUTD" title="Singapore University of Technology and Design" description="Bachelor of Engineering in Computer Science & Design (CSD), Honours with Distinction" />
            <EducationCard logo="/images/logos/tamu.png" alt="TAMU" title="Texas A&M University" description="Global Exchange Program, Spring 2024" />
            <EducationCard logo="/images/logos/berkeley.png" alt="Berkeley" title="University of California, Berkeley" description="Global Leadership Program, Berkeley Summer School 2022" />
            <EducationCard logo="/images/logos/singaporepoly.png" alt="SP" title="Singapore Polytechnic" description="Diploma of Merit in Mechanical Engineering" />
        </div>
    ),
    experience: (
        <div className="flex flex-col gap-6">
            <CareerCard logo="/images/logos/capitaland.png" alt="Catapult by CapitaLand" role="Learning Design & Customer Success Intern" company="Catapult by CapitaLand" description="Built and optimized the Catapult web app with Next.js and Airtable, enhancing visibility, streamlining content updates, and boosting daily click-through rates." />
            <CareerCard logo="/images/logos/dell.png" alt="Dell Technologies" role="Test Engineering Intern" company="Dell Technologies" description="Developed an automated display testing suite with WPF and XAML, reducing manual effort and enhancing test efficiency while improving assessment accuracy." />
            <CareerCard logo="/images/logos/astar.png" alt="ARTC" role="Smart Manufacturing Group" company="Advanced Remanufacturing & Technology Center, A*STAR" description="Developed a digital twin prototype in Unity3D for Industry 4.0 condition monitoring, enhancing predictive maintenance, and designed immersive VR experiences for product showcases and onboarding." />
        </div>
    ),
    skills: (
        <div className="flex flex-col gap-6 text-gray-800">
            {/* Technical Skills */}
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 mb-2">Technical Skills</h3>
                <ul className="space-y-2">
                    <li><span className="font-medium">Web Development:</span> Next.js, JavaScript, TypeScript, HTML, Tailwind CSS</li>
                    <li><span className="font-medium">Backend & Cloud:</span> Python, Node.js, AWS, Google Cloud, RESTful API, Ruby on Rails</li>
                    <li><span className="font-medium">Interactive Development:</span> Unity3D, Protopie, Figma, Arduino</li>
                </ul>
            </div>

            {/* Languages */}
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 mb-2">Languages</h3>
                <ul className="space-y-2">
                    <li><span className="font-medium">Fluent:</span> English, Mandarin (spoken & written)</li>
                    <li><span className="font-medium">Proficient:</span> Malay, Cantonese (spoken & written)</li>
                </ul>
            </div>
        </div>
    ),
};

const AboutSection = () => {
    const [activeTab, setActiveTab] = useState("education");

    return (
        <section className="text-gray-800" id="about">
            <div className="gap-8 items-center py-8">
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">About Me</h2>
                    <p className="text-md text-justify leading-tight">
                        Hello! I&apos;m a graduating Computer Science and Design student from SUTD, passionate about crafting intuitive, user-centered digital experiences. I specialize in UI/UX design, web development, visual storytelling, and immersive content creation. My strength is transforming complex data into engaging visual narratives, making insights accessible to everyone.
                    </p>
                    <p className="text-md mt-4 text-justify leading-tight">
                        In addition to my deep interest in UI/UX, I have a strong foundation in full-stack application development and virtual reality content creation. I am constantly seeking opportunities to expand my knowledge and skill set.
                    </p>
                    <div className="flex flex-row justify-start mt-8 space-x-6 border-b border-gray-300">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative pb-2 font-medium text-lg transition-all duration-300 ${activeTab === tab.id ? "text-primary-500" : "text-gray-600 hover:text-secondary-500"
                                    }`}
                            >
                                {tab.title}
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="mt-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {TAB_CONTENT[activeTab]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;