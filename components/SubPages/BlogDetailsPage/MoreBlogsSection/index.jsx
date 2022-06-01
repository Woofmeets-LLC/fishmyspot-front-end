import MoreBlogCard from './MoreBlogCard';

const MoreBlogsSection = ({ relatedBlogs, category }) => {
  return (
    <div className="p-6 lg:bg-gray-50 lg:bg-transparent lg:p-0">
      <h2 className="mb-6 text-center text-lg font-bold capitalize lg:text-left lg:text-base">
        More from {category}
      </h2>
      <div className="md:grid md:grid-cols-2 md:gap-x-6 lg:block">
        {relatedBlogs?.map((blog) => (
          <MoreBlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default MoreBlogsSection;
