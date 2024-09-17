import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white bg-gradient-to-br from-primary-500 to-secondary-500 scale-110"
    : "text-gray-800 border border-black";

  return (
    <button
      onClick={selectTab}
      className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-primary-500 hover:to-secondary-500 hover:text-white ${buttonClasses}`}
    >
      {children}
    </button>
  );
};

export default TabButton;
