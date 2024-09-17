"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { HiArrowRight } from "react-icons/hi";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="space-y-2 text-gray-800">
                <li className="flex items-center font-medium text-md">
                    <HiArrowRight className="text-primary-600 mr-2" />
                    <span className="text-primary-600 whitespace-nowrap mr-2">Web Development:</span>
                    <span>React, Next.JS, Tailwind CSS</span>
                </li>
                <li className="flex items-center font-medium text-md">
                    <HiArrowRight className="text-primary-600 mr-2" />
                    <span className="text-primary-600 whitespace-nowrap mr-2">Virtual Reality Game Development:</span>
                    <span>Unity3D</span>
                </li>
                <li className="flex items-center font-medium text-md">
                    <HiArrowRight className="text-primary-600 mr-2" />
                    <span className="text-primary-600 whitespace-nowrap mr-2">Interaction Design:</span>
                    <span>Protopie</span>
                </li>
                <li className="flex items-center font-medium text-md">
                    <HiArrowRight className="text-primary-600 mr-2" />
                    <span className="text-primary-600 whitespace-nowrap mr-2">Visual Design:</span>
                    <span>Figma, Canva</span>
                </li>
                <li className="flex items-center font-medium text-md">
                    <HiArrowRight className="text-primary-600 mr-2" />
                    <span className="text-primary-600 whitespace-nowrap mr-2">App Development:</span>
                    <span>Android Studio</span>
                </li>
            </ul>



        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="space-y-2 text-gray-800">
                <li className="flex flex-wrap items-center font-medium text-md">
                    <HiArrowRight className="text-primary-600 mr-2" />
                    <span className="text-primary-600 whitespace-nowrap mr-2">Bachelor in Computer Science & Design (CSD):</span>
                    <span>Singapore University of Technology and Design</span>
                </li>
                <li className="flex flex-wrap items-center font-medium text-md">
                    <HiArrowRight className="text-primary-600 mr-2" />
                    <span className="text-primary-600 whitespace-nowrap mr-2">Global Exchange Program:</span>
                    <span>Texas A&M University</span>
                </li>
                <li className="flex flex-wrap items-center font-medium text-md">
                    <HiArrowRight className="text-primary-600 mr-2" />
                    <span className="text-primary-600 whitespace-nowrap mr-2">Berkeley Summer Session:</span>
                    <span>University of California Berkeley</span>
                </li>
                <li className="flex flex-wrap items-center font-medium text-md">
                    <HiArrowRight className="text-primary-600 mr-2" />
                    <span className="text-primary-600 whitespace-nowrap mr-2">Diploma of Merit in Mechanical Engineering:</span>
                    <span>Singapore Polytechnic</span>
                </li>
            </ul>

        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="space-y-2 text-gray-800">
                <li className="flex flex-wrap items-center font-medium text-md">
                    <HiArrowRight className="text-primary-600 mr-2" />
                    <span className="text-primary-600 whitespace-nowrap mr-2">Learning Design & Customer Success:</span>
                    <span>Catapult by CapitaLand</span>
                </li>
                <li className="flex flex-wrap items-center font-medium text-md">
                    <HiArrowRight className="text-primary-600 mr-2" />
                    <span className="text-primary-600 whitespace-nowrap mr-2">Test Engineering:</span>
                    <span>Dell Singapore</span>
                </li>
                <li className="flex flex-wrap items-center font-medium text-md">
                    <HiArrowRight className="text-primary-600 mr-2" />
                    <span className="text-primary-600 whitespace-nowrap mr-2">Smart Manufacturing Group:</span>
                    <span>Advanced Remanufacturing & Technology Center (ARTC)</span>
                </li>
            </ul>

        ),
    },

];

const AboutSection = () => {
    const [tab, setTab] = useState("education");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="text-gray-800" id="about">
            <div className=" gap-8 items-center py-8">

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                    <p className="text-base lg:text-lg text-justify">
                        As a final-year Computer Science student at the Singapore University of Technology and Design, I am passionate about designing both digital and physical products that cater to user needs. As an interaction designer, I am highly observant of how users engage with technology, always striving to craft simple, intuitive, and user-centered experiences.
                    </p>
                    <p className="text-base lg:text-lg mt-4 text-justify">
                        In addition to my deep interest in UI/UX, I have a strong foundation in full stack application development and virtual reality content creation. I am constantly seeking opportunities to expand my knowledge and skill set. Let’s connect and collaborate to create impactful, user-focused experiences!
                    </p>
                    <div className="flex flex-row justify-start mt-4 space-x-2">
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                    </div>
                    <div className="mt-4">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;