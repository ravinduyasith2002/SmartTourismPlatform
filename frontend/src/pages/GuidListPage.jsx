import { GuideCard } from "../components/guideListPage/guideCard";
import { FilterList } from "../components/FilterList";
import { useState } from "react";
import { Filter } from "lucide-react";
import { guides } from "../dummyData/guides";

export function GuideListPage() {
  const [filters, setFilters] = useState({
    "Base City": [],
    Languages: [],
    Specializations: [],
    Experience: [],
    "Average Rating": [],
    "Price Range": [],
    Availability: [],
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  console.log(filters);
  return (
    <div
      className="min-h-screen w-full px-6 md:px-16 
    lg:px-24 xl:px-32 md:py-32 py-24 "
    >
      {!isMobileFilterOpen && (
        <div
          className={`fixed bottom-6 right-6 md:hidden
             bg-[#18181B] border shadow-lg
             rounded-full p-5  z-50`}
        >
          <Filter
            className="text-white"
            size={20}
            onClick={() => setIsMobileFilterOpen(true)}
          />
        </div>
      )}
      <div className=" grid grid-cols-4 w-full gap-6">
        {/* Guide Cards */}
        <div className="md:col-span-3 col-span-4 w-full flex flex-col gap-6">
          {guides.map((guide) => (
            <GuideCard key={guide.guideId} guide={guide} />
          ))}
        </div>
        {/* Filters */}
        <div className="md:col-span-1 hidden md:block border  py-6 px-10 rounded-lg border-gray-300">
          <FilterList
            filters={filters}
            setFilters={setFilters}
            onClose={() => setIsMobileFilterOpen(false)}
          />
        </div>
        {isMobileFilterOpen && (
          <div
            className={`fixed inset-0 bg-white z-50 p-6 md:hidden overflow-auto`}
          >
            <FilterList
              filters={filters}
              setFilters={setFilters}
              onClose={() => setIsMobileFilterOpen(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
