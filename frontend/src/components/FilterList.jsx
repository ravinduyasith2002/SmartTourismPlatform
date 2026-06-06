import { X } from "lucide-react";
const filtersList = [
  {
    category: "Base City",
    options: ["Colombo", "Kandy", "Galle", "Ella"],
  },
  {
    category: "Languages",
    options: ["English", "Sinhala", "Tamil"],
  },
  {
    category: "Specializations",
    options: ["Cultural", "Historical", "Wildlife", "Adventure"],
  },
  {
    category: "Experience",
    options: ["0-2", "3-5", "6-10", "10+"],
  },
  {
    category: "Average Rating",
    options: ["4+", "4.5+", "5"],
  },
  {
    category: "Price Range",
    options: ["$0-$50", "$50-$100", "$100-$200", "$200+"],
  },
  {
    category: "Availability",
    options: ["busy", "available", "offline"],
  },
];

export function FilterList({ filters, setFilters, onClose }) {
  const handleFilterSelect = (Category, option) => {
    setFilters((prev) => {
      const currentValues = prev[Category] || [];
      const newValues = currentValues.includes(option)
        ? currentValues.filter((v) => v !== option)
        : [...currentValues, option];
      return { ...prev, [Category]: newValues };
    });
  };
  const clearFilters = () => {
    setFilters({
      "Base City": [],
      Languages: [],
      Specializations: [],
      Experience: [],
      "Average Rating": [],
      "Price Range": [],
      Availability: [],
    });
  };

  return (
    <div className="w-full flex flex-col gap-6 p-4 md:p-0">
      <div className="flex items-center justify-between">
        <X
          size={20}
          className="text-gray-600 cursor-pointer md:hidden"
          onClick={onClose}
        />
        <h2 className="text-lg font-bold text-gray-800">Filters</h2>

        <button
          className="text-sm text-blue-600 hover:text-blue-700"
          onClick={clearFilters}
        >
          Clear All
        </button>
      </div>

      <hr className="border-gray-300" />

      {filtersList.map((filter) => (
        <div key={filter.category} className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold text-gray-700">
            {filter.category}
          </h3>

          <div className="space-y-2">
            {filter.options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={filters[filter.category]?.includes(option) ?? false}
                  onChange={() => handleFilterSelect(filter.category, option)}
                />

                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
