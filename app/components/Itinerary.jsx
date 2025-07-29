"use client";
export default function Itinerary({ itinerary }) {
  return (
    <div>
      <ol className="space-y-6">
        {itinerary.map((day, index) => (
          <li
            key={index}
            className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded-md"
          >
            <p className="font-bold text-xl mb-2">
              Day {day.day}: {day.title}
            </p>
            <p className="text-base mb-4">{day.description}</p>

            {day.images?.length > 0 && (
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                {day.images.map((image, idx) =>
                  image.asset?.url ? (
                    <img
                      key={idx}
                      src={image.asset.url}
                      alt={`Day ${day.day} image ${idx + 1}`}
                      className="rounded-lg w-full object-cover aspect-square"
                      loading="lazy"
                    />
                  ) : null
                )}
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}