import { useDispatch } from "react-redux";
import SubClientReviewSection from "../components/SubPages/HomePage/SubClientReviewSection";
import SubFeaturedSpotSection from "../components/SubPages/HomePage/SubFeaturedSpotSection";
import SubFeaturesSection from "../components/SubPages/HomePage/SubFeaturesSection";
import SubFooterImageCard from "../components/SubPages/HomePage/SubFooterImageCard";
import SubHeroSection from "../components/SubPages/HomePage/SubHeroSection";
import SubListingYourSpotSection from "../components/SubPages/HomePage/SubListingYourSpotSection";
import SubWireFramesSection from "../components/SubPages/HomePage/SubWireFramesSection";
import HomeLayout from "../layouts/HomeLayout";

const Home = () => {
    const dispatch = useDispatch();
    return (
        <HomeLayout>
            <SubHeroSection />
            <SubFeaturesSection />
            <SubWireFramesSection />
            <SubFeaturedSpotSection />
            <SubClientReviewSection />
            <SubListingYourSpotSection />
            <SubFooterImageCard />
        </HomeLayout>
    );
};

export default Home;