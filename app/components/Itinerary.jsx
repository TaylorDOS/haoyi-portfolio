"use client";
import { useState } from "react";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function Itinerary({ itinerary }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div>
      <ol className="space-y-6">
        {itinerary.map((day, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <li
              key={index}
              className={`border-l-4 border-blue-500 pl-4 transition-all duration-300 cursor-pointer ${
                isExpanded ? "bg-blue-50 p-4 rounded-md" : "hover:bg-gray-50"
              }`}
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-xl">
                  Day {day.day}: {day.title}
                </p>

              </div>

              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  isExpanded ? "max-h-[2000px] mt-2" : "max-h-0"
                }`}
              >
                <p className="text-base mb-4">{day.description}</p>

                {day.images?.length > 0 && (
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="flex w-auto gap-4"
                    columnClassName="space-y-4"
                  >
                    {day.images.map((image, idx) =>
                      image.asset?.url ? (
                        <img
                          key={idx}
                          src={image.asset.url}
                          alt={`Day ${day.day} image ${idx + 1}`}
                          className="rounded-lg w-full"
                          loading="lazy"
                        />
                      ) : null
                    )}
                  </Masonry>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}