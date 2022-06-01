import Script from "next/script";
import SubBlogSection from "../../components/SubPages/BlogPage/SubBlogsSection";
import HomeLayout from "../../layouts/HomeLayout";

const Blogs = () => {
  return (
    <HomeLayout>
      <SubBlogSection />
    </HomeLayout>
  );
};

export default Blogs;
