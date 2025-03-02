import React from "react";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, tags = [], onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="relative w-full mx-auto overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:shadow-xl hover:scale-105 group"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="text-center py-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;