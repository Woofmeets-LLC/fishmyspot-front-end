import dynamic from "next/dynamic";
import SubClientReviewSection from "../components/SubPages/HomePage/SubClientReviewSection";
// import SubFeaturedSpotSection from "../components/SubPages/HomePage/SubFeaturedSpotSection";
import SubFeaturesSection from "../components/SubPages/HomePage/SubFeaturesSection";
import SubFooterImageCard from "../components/SubPages/HomePage/SubFooterImageCard";
import SubHeroSection from "../components/SubPages/HomePage/SubHeroSection";
import SubListingYourSpotSection from "../components/SubPages/HomePage/SubListingYourSpotSection";
import SubWireFramesSection from "../components/SubPages/HomePage/SubWireFramesSection";
import SubExploreFishMySpotByState from "../components/SubPages/HomePage/SubExploreFishMySpotByState";
import HomeLayout from "../layouts/HomeLayout";

const SubFeaturedSpotSection = dynamic(
  () => import("../components/SubPages/HomePage/SubFeaturedSpotSection"),
  { ssr: false }
);

const Home = () => {
  return (
    <HomeLayout>
      <SubHeroSection />
      <SubFeaturesSection />
      <SubWireFramesSection />
      <SubFeaturedSpotSection />
      <SubClientReviewSection />
      <SubListingYourSpotSection />
      {/* <SubExploreFishMySpotByState /> */}
      <SubFooterImageCard />
    </HomeLayout>
  );
};

export default Home;
