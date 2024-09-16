import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black border-primary-500"
    : "text-black border-slate-600 hover:border-secondary-700";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-5 py-2 text-lg`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;