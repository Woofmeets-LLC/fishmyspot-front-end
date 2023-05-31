import dynamic from 'next/dynamic';
import SubClientReviewSection from '../components/SubPages/HomePage/SubClientReviewSection';
import SubExploreFishMySpotByState from '../components/SubPages/HomePage/SubExploreFishMySpotByState';
// import SubFeaturedSpotSection from "../components/SubPages/HomePage/SubFeaturedSpotSection";
import HowDidHearModal from '../components/SubPages/HomePage/HowDidHearModal';
import SubFeaturesSection from '../components/SubPages/HomePage/SubFeaturesSection';
import SubFooterImageCard from '../components/SubPages/HomePage/SubFooterImageCard';
import SubHeroSection from '../components/SubPages/HomePage/SubHeroSection';
import SubListingYourSpotSection from '../components/SubPages/HomePage/SubListingYourSpotSection';
import SubWireFramesSection from '../components/SubPages/HomePage/SubWireFramesSection';
import HomeLayout from '../layouts/HomeLayout';

const SubFeaturedSpotSection = dynamic(
  () => import('../components/SubPages/HomePage/SubFeaturedSpotSection'),
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
      <SubExploreFishMySpotByState />
      <SubFooterImageCard />
      <HowDidHearModal />
    </HomeLayout>
  );
};

export default Home;
