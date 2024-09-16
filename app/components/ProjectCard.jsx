import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="relative group">
      {/* Container for the image */}
      <div
        className="h-full rounded-xl relative aspect-video overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {/* Dark overlay on hover */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-xl"></div>

        {/* Overlay with icon */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full hidden group-hover:flex transition-all duration-500 rounded-xl">
          <Link
            href={previewUrl}
            className="h-full w-full border-gray-600 hover:border-white group/link"
          >
            
          </Link>
        </div>
      </div>

      {/* Card details */}
      <div className="text-gray-800 rounded-b-xl mt-2 text-center">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
