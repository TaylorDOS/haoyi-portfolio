"use client";
import React, { useState, useMemo} from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectsData from "../data/projectsData";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const reversedProjects = useMemo(() => [...projectsData].reverse(), [projectsData]);

  return (
    <section id="projects">
      <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Projects</h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-6">
        {reversedProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            imgUrl={project.image}
            title={project.title}
            description={project.description}
            tags={project.tag}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default ProjectsSection;