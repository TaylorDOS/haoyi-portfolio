import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <Link href={previewUrl} passHref>
      <div className="relative group cursor-pointer transition-transform transform hover:scale-105">
        <div
          className="h-full rounded-xl relative aspect-video overflow-hidden"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-slate-600 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>

          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full hidden group-hover:flex transition-all duration-500 rounded-xl">
            {/* Add content here if needed */}
          </div>
        </div>
        <div className="text-gray-800 rounded-b-xl mt-2 text-center">
          <h5 className="text-xl font-semibold">{title}</h5>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
