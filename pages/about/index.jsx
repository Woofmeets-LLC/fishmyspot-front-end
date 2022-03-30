import React from 'react';
import { PageTitle, SectionTitleDescription } from '../../components/Common';
import HomeLayout from '../../layouts/HomeLayout';

const About = () => {
    return (
        <HomeLayout>
            <div className="container">
                <PageTitle title="About" />

                <SectionTitleDescription
                    title="WHAT IS FISHMYSPOT?"
                    descriptions={[
                        "FishMySpot is an online marketplace that connects pond owners to people that want to fish privately and that are seeking new fishing experiences."
                    ]} />

                <SectionTitleDescription
                    title="OUR STORY"
                    descriptions={[
                        "Growing up, we had a love for fishing untapped water holes. As adults and parents, we have we have found it more difficult because asking permission from land owners became daunting and disappointing. Plus, fishing at public lakes with young children was inconvenient, not always accessible and left our young children frequently disappointed with their catch.",
                        "That’s why we started FishMySpot: To bring local, private fishing holes to passionate anglers who are always dreaming of the next big catch."
                    ]} />

                <SectionTitleDescription
                    title="OUR MISSION"
                    descriptions={[
                        "Our mission is to connect families with unique fishing experiences, the community, and each other. By providing fishing spots close to home, we make it convenient for adults and children to get outside and enjoy nature. Parents can teach their children to fish without the hassle of crowds and drive to public lakes. The passionate angler experiences the thrill of fishing at various water holes. While at the same time, we build a community of outdoor enthusiasts.",
                        "Are you ready to get hooked?"
                    ]} />

                <section className="mb-10">
                    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
                        <div className="aspect-video border p-1">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/s-DqlCIVaRg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </section>
            </div>
        </HomeLayout>
    );
};

export default About;