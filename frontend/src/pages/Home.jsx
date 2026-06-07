import ExclusiveOffers from "../components/ExclusiveOffers";
import FeaturedDestination from "../components/FeaturedDestination";
import FeatureGuides from "../components/FeatureGuides";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination/>
      <FeatureGuides/>
      <ExclusiveOffers/>
    </>
  );
};

export default Home;
