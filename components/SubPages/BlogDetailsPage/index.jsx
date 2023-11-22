import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { default as Markdown } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MoreBlogsSection from './MoreBlogsSection';
import SubFeaturedFishingSpotSection from './SubFeaturedFishingSpotSection';
import SubListedYourSpotSection from './SubListedYourSpotSection';

const FacebookShareButton = dynamic(() =>
  import('next-share').then((mod) => mod.FacebookShareButton)
);

const FacebookIcon = dynamic(() =>
  import('next-share').then((mod) => mod.FacebookIcon)
);

const TwitterShareButton = dynamic(() =>
  import('next-share').then((mod) => mod.TwitterShareButton)
);

const TwitterIcon = dynamic(() =>
  import('next-share').then((mod) => mod.TwitterIcon)
);

const LinkedinShareButton = dynamic(() =>
  import('next-share').then((mod) => mod.LinkedinShareButton)
);

const LinkedinIcon = dynamic(() =>
  import('next-share').then((mod) => mod.LinkedinIcon)
);

const EmailShareButton = dynamic(() =>
  import('next-share').then((mod) => mod.EmailShareButton)
);

const EmailIcon = dynamic(() =>
  import('next-share').then((mod) => mod.EmailIcon)
);

const SubBlogDetailsSection = ({ data: blogDetails }) => {
  const [w, setW] = useState({
    location: {
      href: null,
    },
  });

  useEffect(() => {
    setW(window);
  }, []);

  // if (
  //   !router.isReady ||
  //   slug === undefined ||
  //   !blogDetails?.attributes?.title
  // ) {
  //   return (
  //     <div className="flex justify-center items-center flex-col">
  //       <ClipLoader size={50} color={"#1971ff"} />
  //       <h2 className="w-full text-center font-semibold mt-2">Loading...</h2>
  //     </div>
  //   );
  // }
  console.log('blog Details', blogDetails);
  // const parseBlog = JSON.parse(blogDetails?.attributes?.description);

  return (
    <>
      <section className="bg-gray-50">
        <div className="container">
          <div className="lg:grid lg:grid-cols-12">
            <div className="lg:col-span-8 lg:border-r lg:border-r-gray-300">
              <div className="mx-auto pt-10 md:w-[600px] xl:w-[680px]">
                <h1 className="mb-7 font-food-truck text-4xl uppercase tracking-wide text-highlight-1">
                  {blogDetails?.attributes?.title}
                </h1>

                <div className="items-center pb-10 md:flex md:justify-between">
                  <div className="flex flex-col">
                    <span className="font-trade-gothic-bold text-secondary md:text-lg">
                      {blogDetails?.attributes?.author}
                    </span>
                    <span className="text-sm capitalize text-highlight-2">
                      Published On{' '}
                      {new Date(
                        blogDetails?.attributes?.createdAt
                      )?.toDateString()}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-start gap-2 md:mt-0 md:justify-end">
                    <span className="text-sm text-gray-500">Share</span>

                    <FacebookShareButton url={w?.location?.href}>
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>

                    <TwitterShareButton url={w?.location?.href}>
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>

                    <LinkedinShareButton url={w?.location?.href}>
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>

                    <EmailShareButton url={w?.location?.href}>
                      <EmailIcon size={32} round />
                    </EmailShareButton>
                  </div>
                </div>

                {/* Blocks renderer */}
                {/* <BlocksRenderer parseDetail={parseBlog} /> */}

                <div className="mb-4 p-4">
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {blogDetails?.attributes?.description}
                  </Markdown>
                </div>
              </div>
            </div>
            <div className="mx-auto hidden pt-10 lg:col-span-4 lg:block lg:pl-4">
              {blogDetails?.relatedBlogs.length !== 0 && (
                <MoreBlogsSection
                  relatedBlogs={blogDetails?.relatedBlogs}
                  category={
                    blogDetails?.attributes?.category?.data?.attributes?.name
                  }
                />
              )}
            </div>
          </div>
        </div>
      </section>
      {blogDetails?.attributes?.featuredSpots?.length !== 0 && (
        <SubFeaturedFishingSpotSection
          featuredSpots={blogDetails?.attributes?.featuredSpots}
        />
      )}
      <div className="container pb-10 lg:hidden lg:pb-0">
        <div className="mx-auto pt-10">
          {blogDetails?.relatedBlogs.length !== 0 && (
            <MoreBlogsSection
              relatedBlogs={blogDetails?.relatedBlogs}
              category={
                blogDetails?.attributes?.category?.data?.attributes?.name
              }
            />
          )}
        </div>
      </div>
      <SubListedYourSpotSection />
    </>
  );
};

export default SubBlogDetailsSection;
