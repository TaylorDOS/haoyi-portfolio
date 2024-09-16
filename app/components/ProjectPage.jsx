import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projectData = [
    {
        id: 1,
        title: "LearnMate",
        description: "Recognizing the unique needs of individuals with ADHD or similar attention disorders, LearnMate's goal is to help them focus better on study with integration between an interactive mood light and Pomodoro techniques. This innovative mood light aims to provide a personalized and conducive environment for improved focus, productivity, and overall well-being.",
        image: "/images/projects/1.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/projects/1",
    },
    {
        id: 2,
        title: "OpenDot",
        description: "OpenDot is a community-based peer review app for discovering the hidden gems in Singapore. The app is designed for Android mobile devices, and it features a Tinder-like swiping system to recommend attractions, food places and encouraging you to explore and uncover the city's hidden delights regardless if you're a local or a tourist.",
        image: "/images/projects/2.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "CreAItiveStudios",
        description: "In collaboration with the Central Provident Fund Board, the Service Design Studio's industry project undertook the task of redesigning the CPF application. The objective was to ensure user-friendliness, especially for individuals less adept with digital platforms. Utilizing Next JS and Ruby on Rails, a proof of concept was developed and deployed on Google Cloud. This revamped application incorporates features such as fuzzy search, advanced rank search, and speech-to-text transcription using Google's API.",
        image: "/images/projects/2.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "/",
        videoLink: "https://www.youtube.com/watch?v=Xj8-tfrNFxQ&ab_channel=OnnHuiNing",
    },
    {
        id: 4,
        title: "Industry 4.0 Condition Monitoring App",
        description: "The application served as a PoC for creating a conditon monitoring app for Industry 4.0 use case. The app runs on an iPad and allows monitoring of machines' statuses on the shop floor through MQTT connections. Users can establish new connections through the UI, and the status will be reflected in term of colors rendered to the machine.",
        image: "/images/projects/4.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "/",
    },
    {
        id: 5,
        title: "Virtual Reality Game Development",
        description: "Planet Golf and Food Rush are both Unity3D based virtual reality mutliplayer games which work on Oculus Quest 2. Food Rush is a tagging game that tagger try their best to tag any runners in the game, and vice versa with the implementation of different power-ups such as mini maps, speed boost etc. Planet Golf is a mini golf game that allows users to explore around 3 well crafted terrain on Mars, Earth and Neptune respectively. Each course has their own gravity settings and the goal is to hit the ball using provided golf club.",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "/",
    },
    {
        id: 6,
        title: "TaylorDot",
        description: "Taylor Dot is a reimagined version of Flappy Bird, featuring simple gameplay where players must navigate a pixelated bird through obstacles by tapping a button to keep it airborne. The game's addictive nature fills the void left by Flappy Bird's departure. In this project, the game was redesigned with pixel graphics and enhanced functionality, utilizing ALU functions and connecting hardware components like LED displays and buttons to I/O pins for seamless gameplay.",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "/",
    },
];

const ProjectDetail = ({ projectId }) => {
    const project = projectData.find((proj) => proj.id === parseInt(projectId));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="mb-10">
            <h2 className="text-center text-4xl font-bold text-black mt-4 mb-4 md:mb-8">{project.title}</h2>
            <div className="flex justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="rounded-full overflow-hidden"
                    style={{ borderRadius: "20px" }}>
                    {project.videoLink ? (
                        <div style={{ width:"80vw", height: "45vw"}}>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/Xj8-tfrNFxQ?si=9iN-jlX9dH6qpG4g"
                                title="Youtube Player" f
                                rameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen></iframe>
                        </div>
                    ) : (
                        <Image className="aspect-video object-cover"src={project.image} alt={project.title} width={1000} height={300} rounded />)}
                </motion.div>
            </div >
            <p className="text-black leading-relaxed mt-8 mb-8 md:mb-12 text-justify">{project.description}</p>
        </div >
    );
};

export default ProjectDetail;