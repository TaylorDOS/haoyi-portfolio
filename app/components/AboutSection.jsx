"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Web Development - React, Next.JS, Tailwind CSS</li>
                <li>VR Game Development - Unity3D</li>
                <li>Interaction Design - Protopie</li>
                <li>Visual Design - Figma, Canva</li>
                <li>App Development - Android Studio</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Computer Science & Design (CSD) - Singapore University of Technology and Design</li>
                <li>Global Exchange Program - Texas A&M University</li>
                <li>Berkeley Summer Session - University of California Berkeley</li>
                <li>Diploma of Merit in Mechanical Engineering - Singapore Polytechnic</li>
            </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Learning Design & Customer Success - Catapult by CapitaLand</li>
                <li>Test Engineering - Dell Singapore</li>
                <li>Smart Manufacturing Group - Advanced Remanufacturing & Technology Center (ARTC)</li>
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
            <div className=" gap-8 items-center py-8 px-4 ">

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                    Hello, I&apos;m a UX/UI designer with a solid background in Engineering, which equips me with the ability to conceptualize designs and bring them to life. My experience allows me to empathize with users, prioritizing their needs over mere wants when crafting products. Additionally, I possess proficiency in modeling, XR content delivery, software development, and backend deployment, poised to make substantial contributions to any project.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
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
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;