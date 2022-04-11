/* eslint-disable import/no-anonymous-default-export */

import SubClientReviewSection from '../../components/SubPages/HomePage/SubClientReviewSection';
import SubFeaturedSpotSection from '../../components/SubPages/HomePage/SubFeaturedSpotSection';
import SubFeaturesSection from '../../components/SubPages/HomePage/SubFeaturesSection';
import SubFooterImageCard from '../../components/SubPages/HomePage/SubFooterImageCard';
import SubHeroSection from '../../components/SubPages/HomePage/SubHeroSection';
import SubListingYourSpotSection from '../../components/SubPages/HomePage/SubListingYourSpotSection';
import SubWireFramesSection from '../../components/SubPages/HomePage/SubWireFramesSection';
import Home from '../../pages';

export default {
    title: 'pages/Home Page',
    component: Home
}

export const HomeStoryA = () => <SubHeroSection />;
HomeStoryA.storyName = "Hero Section";

export const HomeStoryB = () => <SubFeaturesSection />;
HomeStoryB.storyName = "Features Section";

export const HomeStoryC = () => <SubWireFramesSection />;
HomeStoryC.storyName = "Wire Frames Section";

export const HomeStoryD = () => <SubFeaturedSpotSection />;
HomeStoryD.storyName = "Featured Spot Section";

export const HomeStoryE = () => <SubClientReviewSection />;
HomeStoryE.storyName = "Client Review Section";

export const HomeStoryF = () => <SubListingYourSpotSection />;
HomeStoryF.storyName = "Listing Your Spot Section";

export const HomeStoryG = () => <SubFooterImageCard />;
HomeStoryG.storyName = "Footer Image Card";

export const HomeStoryH = () => <Home />;
HomeStoryH.storyName = "Full Home Page";