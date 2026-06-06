import { StarRating } from "../StarComponet";

export function GuideCard({ guide }) {
  return (
    <div className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]">
      
      {/* Image / Avatar Area */}
      <div className={`w-full h-48 ${guide.imageUrl ? "" : "bg-teal-100 flex items-center justify-center"}`}>
        {guide.imageUrl ? (
          <img src={guide.imageUrl} alt={guide.displayName} className="w-full h-full object-cover" />
        ) : (
          <span className="text-5xl text-gray-600">
            {guide.displayName.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="text-xl font-medium text-gray-800">{guide.displayName}</p>
          <div className="flex items-center gap-1">
            <StarRating rating={guide.averageRating} />
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-1">{guide.baseCity}</p>
        <p className="text-sm mt-1">{guide.yearsExperience} years experience</p>

        {/* Specializations */}
        <div className="flex flex-wrap gap-2 mt-3">
          {guide.specializations.map((spec) => (
            <span key={spec} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs">
              {spec}
            </span>
          ))}
        </div>

        {/* Languages */}
        <div className="flex flex-wrap gap-2 mt-2">
          {guide.languages.map((lang) => (
            <span key={lang} className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs">
              {lang}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl text-gray-800">${guide.pricePerDay.toFixed(2)}</span> /day
          </p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
            Contact Guide
          </button>
        </div>
      </div>
    </div>
  );
}