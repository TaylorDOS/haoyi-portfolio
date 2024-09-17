import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonClasses = `inline-block px-5 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ease-in-out  hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 hover:text-white ${
    isSelected
      ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white scale-110"
      : "bg-transparent text-black border border-black"
  }`;

  return (
    <button className={buttonClasses} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
