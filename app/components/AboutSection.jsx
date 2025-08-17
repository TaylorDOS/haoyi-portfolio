"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const tabs = [
    { title: "Skills", id: "skills" },
    { title: "Experience", id: "experience" },
    { title: "Education", id: "education" },
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
            <EducationCard logo="/images/logos/sutd.png" alt="SUTD" title="Singapore University of Technology and Design" description="Computer Science & Design, Honours with Distinction (Second Upper)" />
            <EducationCard logo="/images/logos/tamu.png" alt="TAMU" title="Texas A&M University" description="Global Exchange Program, Spring 2024" />
            <EducationCard logo="/images/logos/berkeley.png" alt="Berkeley" title="University of California, Berkeley" description="Global Leadership Program, 2022" />
            <EducationCard logo="/images/logos/singaporepoly.png" alt="SP" title="Singapore Polytechnic" description="Diploma of Merit in Mechanical Engineering" />
        </div>
    ),
    experience: (
        <div className="flex flex-col gap-6">
            <CareerCard logo="/images/logos/catapult.png" alt="Catapult by CapitaLand" role="Technology Consultant & Solutions Provider" company="Catapult by CapitaLand" description="Enhancing website performance through thoughtful system design, and elevating storytelling through interactive graphic experiences." />
            <CareerCard logo="/images/logos/catapult.png" alt="Catapult by CapitaLand" role="Learning Design & Customer Success Intern" company="Catapult by CapitaLand" description="Built and optimized the Catapult web app with Next.js and Airtable, enhancing visibility, streamlining content updates, and boosting daily click-through rates." />
            <CareerCard logo="/images/logos/dell.png" alt="Dell Technologies" role="Test Engineering Intern" company="Dell Technologies" description="Developed an automated display testing suite with WPF and XAML, reducing manual effort and enhancing test efficiency while improving assessment accuracy." />
            <CareerCard logo="/images/logos/astar.png" alt="ARTC" role="Smart Manufacturing Group" company="Advanced Remanufacturing & Technology Center, A*STAR" description="Developed a digital twin prototype in Unity3D for Industry 4.0 condition monitoring, enhancing predictive maintenance, and designed immersive VR experiences for product showcases and onboarding." />
        </div>
    ),
    skills: (
        <div className="flex flex-col gap-6 text-gray-800">
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 mb-2">Business & Strategic Skills</h3>
                <ul className="space-y-2">
                    <li>
                        <span className="font-medium">Brand Strategy:</span> Crafting cohesive brand identities aligned with business goals
                    </li>
                    <li>
                        <span className="font-medium">User Experience Strategy:</span> Mapping customer journeys and optimizing user flows
                    </li>
                    <li>
                        <span className="font-medium">Digital Storytelling:</span> Communicating complex ideas through visuals and narratives
                    </li>
                    <li>
                        <span className="font-medium">Product Thinking:</span> Bridging business needs with user-centered design
                    </li>
                    <li>
                        <span className="font-medium">Stakeholder Communication:</span> Translating tech insights for non-technical audiences
                    </li>
                    <li>
                        <span className="font-medium">Market Research & Competitive Analysis:</span> Identifying opportunities and positioning through research
                    </li>
                </ul>
            </div>
            <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500 mb-2">Technical Skills</h3>
                <ul className="space-y-2">
                    <li><span className="font-medium">Web Development:</span> Next.js, JavaScript, TypeScript, HTML, Tailwind CSS</li>
                    <li><span className="font-medium">Backend & Cloud:</span> Python, Node.js, AWS, Google Cloud, RESTful API, Ruby on Rails</li>
                    <li><span className="font-medium">Interactive Development:</span> Unity3D, Protopie, Figma, Arduino</li>
                </ul>
            </div>
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
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <div className="gap-8 items-center py-8">
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">About Me</h2>
                <p className="text-md text-justify leading-tight">
                    Hi, I&apos;m a tech consultant and branding strategist based in Singapore. I help businesses turn ideas into engaging digital experiences by combining a strong foundation in computer science with cross-industry expertise in learning & development, interaction design, and design thinking.
                </p>
                <p className="text-md mt-4 text-justify leading-tight">
                    I specialize in crafting bold brand identities and translating complex data into clear, compelling visual stories. Whether you’re building from scratch or reimagining your digital presence, I bring clarity, consistency, and creativity to every project — blending design that works with stories that resonate.
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
    );
};

export default AboutSection;