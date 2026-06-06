import { StarRating } from "../StarComponet";
export function GuideCard({ guide }) {
  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-4 flex flex-col sm:flex-row gap-4">
      {/* Avatar */}
      <div
        className={`w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg overflow-hidden shrink-0 ${
          guide.imageUrl ? "" : "bg-teal-100 flex items-center justify-center"
        }`}
      >
        {guide.imageUrl ? (
          <img
            src={guide.imageUrl}
            alt={guide.displayName}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-3xl sm:text-4xl text-gray-600">
            {guide.displayName
              .split(" ")
              .map((name) => name[0])
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <p className="text-sm text-gray-500">{guide.baseCity}</p>

        <h2 className="text-xl text-gray-800 font-medium">
          {guide.displayName}
        </h2>

        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <StarRating rating={guide.averageRating} />
          <span className="text-sm text-gray-500">
            ({guide.reviewCount} reviews)
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-2">
          {guide.yearsExperience} years experience
        </p>

        {/* Specializations */}
        <div className="flex flex-wrap gap-2 mt-3">
          {guide.specializations.map((spec) => (
            <span
              key={spec}
              className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Languages */}
        <div className="flex flex-wrap gap-2 mt-2">
          {guide.languages.map((lang) => (
            <span
              key={lang}
              className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
          <span className="text-lg text-gray-800 font-medium">
            ${guide.pricePerDay.toFixed(2)}
            <span className="text-sm text-gray-500"> / day</span>
          </span>

          <button className="w-full sm:w-auto px-5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-sm">
            Contact Guide
          </button>
        </div>
      </div>
    </div>
  );
}
