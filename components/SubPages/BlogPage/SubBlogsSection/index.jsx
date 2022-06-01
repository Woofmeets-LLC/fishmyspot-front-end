import axios from 'axios';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import useSwr from 'swr';
import BlogCard from '../BlogCard/';
import CategorySection from './CategorySection';
import SubBlogSectionBanner from './SubBlogSectionBanner';
const fetcher = (url) => axios.get(url).then((res) => res.data.data);

const SubBlogSection = () => {
  const { data: categories, error: categoryError } = useSwr(
    'https://cms.fishmyspot.com/api/categories',
    fetcher
  );
  const [blogsCategory, setBlogsCategory] = useState('');

  const { data: blogs, error } = useSwr(
    blogsCategory !== ''
      ? 'https://cms.fishmyspot.com/api/blogs?populate=*&filters[category][name][$eq]=' +
          blogsCategory
      : 'https://cms.fishmyspot.com/api/blogs?populate=*',
    fetcher
  );

  return (
    <>
      <SubBlogSectionBanner src={'/images/blog.jpg'} />
      {!blogs && !error && (
        <section className="bg-gray-50">
          <div className="container pt-16 pb-20">
            <div className="flex flex-col items-center justify-center">
              <ClipLoader size={50} color={'#1971ff'} />
              <h2 className="mt-2 w-full text-center font-semibold">
                Loading...
              </h2>
            </div>
          </div>
        </section>
      )}
      {blogs && (
        <section className="bg-gray-50">
          <div className="container pt-16 pb-20">
            {categories?.length !== 0 && (
              <CategorySection
                setBlogsCategory={setBlogsCategory}
                categories={categories}
                blogsCategory={blogsCategory}
              />
            )}
            {blogs?.length === 0 ? (
              <div className="text-center font-trade-gothic-bold text-2xl capitalize text-gray-600 md:text-3xl lg:text-4xl 2xl:text-5xl">
                No Blogs Found
              </div>
            ) : (
              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {blogs?.map((blog) => (
                  <BlogCard key={blog?.id} blog={blog} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default SubBlogSection;
