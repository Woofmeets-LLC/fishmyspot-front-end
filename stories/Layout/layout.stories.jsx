/* eslint-disable import/no-anonymous-default-export */
import HomeLayout from "../../layouts/HomeLayout";
import Footer from "../../layouts/HomeLayout/Footer";
import Header from "../../layouts/HomeLayout/Header";

export default {
    title: "Layout/HomeLayout",
    component: Header,
}

export const LayoutStory = () => <div>Layout</div>;
const LayoutStoryA = () => <Header />;
LayoutStoryA.storyName = "Header";

const LayoutStoryB = () => <Footer />;
LayoutStoryB.storyName = "Footer";

const Template = (args) => {
    return (
        <HomeLayout {...args} >
            <div className="my-10 text-center">{args.children} </div>
        </HomeLayout>
    )
};

const LayoutStoryC = Template.bind({});
LayoutStoryC.args = {
    children: "Content will go here...",
    isPrivate: false,
    guards: {
        account_type: '',
        fallbackUrl: '',
    }
};
LayoutStoryC.storyName = "Home Layout";