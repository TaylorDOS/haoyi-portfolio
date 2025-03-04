"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectsData from "../data/projectsData";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Academic", "Industry", "Internship"];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return [...projectsData].reverse();
    return projectsData.filter((project) => project.category.includes(activeCategory)).reverse();
  }, [activeCategory]);

  return (
    <section>
      <h2 className="pt-8 text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
        Projects
      </h2>

      <div className="flex flex-row justify-start mt-8 space-x-6 border-b border-gray-300">
        {categories.map((category, index) => (
          <button
            key={`${category}-${index}`}
            onClick={() => setActiveCategory(category)}
            className={`relative pb-2 font-medium text-lg transition-all duration-300 ${
              activeCategory === category ? "text-primary-500" : "text-gray-600 hover:text-secondary-500"
            }`}
          >
            {category}
            {activeCategory === category && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-6">
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  imgUrl={project.image}
                  title={project.title}
                  description={project.description}
                  category={project.category} // Ensure category is displayed properly
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-gray-500 text-center col-span-2"
            >
              No projects found in this category.
            </motion.p>
          )}
        </AnimatePresence>
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