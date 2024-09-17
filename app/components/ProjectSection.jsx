"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 0,
    title: "Catapult's Digital Brochure",
    description: "Full Stack Web Development",
    image: "/images/projects/0.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/projects/0",
  },
  {
    id: 1,
    title: "LearnMate",
    description: "Interaction Design Project",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/projects/1",
  },
  {
    id: 2,
    title: "OpenDot",
    description: "Android Mobile App Development",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/projects/2",
  },
  {
    id: 3,
    title: "CreaAItive Studios",
    description: "Service Design Studio",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/projects/3",
  },
  {
    id: 4,
    title: "Industry 4.0 Condition Monitoring",
    description: "Unity3D App Development",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/4",
  },
  {
    id: 5,
    title: "Virtual Reality Game Development",
    description: "Multiplayer Oculus Quest's Games",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/5",
  },
  {
    id: 6,
    title: "TaylorDot",
    description: "FPGA Programming",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/projects/6",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-black mt-4">
        Projects
      </h2>
      <div className="text-black flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
