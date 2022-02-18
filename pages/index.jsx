import { useDispatch } from "react-redux";
import SubFeaturesSection from "../components/SubPages/HomePage/SubFeaturesSection";
import SubHeroSection from "../components/SubPages/HomePage/SubHeroSection";
import SubWireFramesSection from "../components/SubPages/HomePage/SubWireFramesSection";
import HomeLayout from "../layouts/HomeLayout";

const Home = () => {
    const dispatch = useDispatch();
    return (
        <HomeLayout>
            <div className="container">
                <SubHeroSection />
                <SubFeaturesSection />
                <SubWireFramesSection />
            </div>
        </HomeLayout>
    );
};

export default Home;