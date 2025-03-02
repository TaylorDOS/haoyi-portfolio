import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg max-w-4xl w-full p-8 relative mx-4"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>


        <div className="relative w-full rounded-lg overflow-hidden aspect-video">
          <div className="relative w-full aspect-video">
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          </div>
        </div>

        {/* Project Description */}
        <p className="text-gray-600 mt-2">{project.details}</p>

        {/* Links Section */}
        {project.externalLink && (
          <div className="flex justify-center mt-6">
            <Link
              href={project.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-sm font-semibold rounded-full shadow-md hover:opacity-90 transition"
            >
              Find Out More
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectModal;