import React from "react";
import { guides } from "../dummyData/guides";
import { GuideCard } from "./guideListPage/GuideCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeatureGuides = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="Featured Guides"
        subTitle="Explore our curated collection of expert travel guides, designed to inspire your next adventure."
      />

      <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
        {guides.slice(0, 6).map((guide) => (
          <GuideCard key={guide.guideId} guide={guide} />
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/guide");
          scrollTo(0, 0);
        }}
        className="my-16 px-4 py-2 text-sm font-medium border
       border-gray-300 rounded bg-white hover:bg-gray-50
       transition-all cursor-pointer"
      >
        View All Guides
      </button>
    </div>
  );
};

export default FeatureGuides;
