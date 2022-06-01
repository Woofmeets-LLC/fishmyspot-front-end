import Image from 'next/image';
import Link from 'next/link';

const MoreBlogCard = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog?.attributes?.slug}`}>
      <a>
        <div className="mb-6 grid h-full grid-cols-12 items-center gap-x-4 border-b border-b-gray-300 pb-2 lg:border-b-0 lg:pb-0">
          <div className="col-span-9 space-y-1">
            <span className="text-sm text-gray-800">
              {blog?.attributes?.author}
            </span>
            <h2 className="text-sm font-bold">{blog?.attributes?.title}</h2>
          </div>
          <div className="relative col-span-3 aspect-video h-16 w-full">
            <Image
              src={blog?.attributes?.featuredImage?.data?.attributes?.url}
              priority
              layout="fill"
              alt={''}
              className="object-cover"
            />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default MoreBlogCard;
