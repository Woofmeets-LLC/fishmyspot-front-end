import { useDispatch } from "react-redux";
import SubHeroSection from "../components/SubPages/HomePage/SubHeroSection";
import HomeLayout from "../layouts/HomeLayout";

const Home = () => {
    const dispatch = useDispatch();
    return (
        <HomeLayout>
            <div className="container">
                <SubHeroSection />
            </div>
        </HomeLayout>
    );
};

export default Home;