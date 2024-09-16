import React from "react";
const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-gray-800 border-b border-primary-500" : "text-gray-500";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-primary-800 ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;