import Link from 'next/link';

const BlogCard = ({ blog }) => {
  const imgUrl = blog?.attributes?.featuredImage?.data?.attributes?.formats
    ?.thumbnail?.url
    ? blog?.attributes?.featuredImage?.data?.attributes?.formats?.thumbnail?.url
    : blog?.attributes?.featuredImage?.data?.attributes?.formats?.small?.url;

  return (
    <div className="relative flex h-full min-w-0 flex-col break-words rounded-md bg-white bg-clip-border shadow-md">
      <div className="p-3">
        <img
          src={imgUrl}
          alt=""
          className="card-img-top h-[234px] w-full object-cover align-middle shadow"
        />
      </div>
      <div className="flex-auto p-3 pb-5">
        <Link href={`/blogs/${blog?.attributes?.slug}`}>
          <a className="block text-center font-trade-gothic-bold text-lg text-primary">
            {blog?.attributes?.title}
          </a>
        </Link>
      </div>
      <div className="pb-8">
        <div className="mb-7 px-6">
          <div className="h-px w-full bg-[#dedede]"></div>
        </div>
        <div className="flex items-center justify-center space-x-3 font-trade-gothic text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Publish</span>
            <span className="text-highlight-3">
              {new Date(blog?.attributes?.createdAt)?.toDateString()}
            </span>
          </div>{' '}
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">by</span>
            <span className="font-trade-gothic-bold text-secondary">
              {blog?.attributes?.author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
