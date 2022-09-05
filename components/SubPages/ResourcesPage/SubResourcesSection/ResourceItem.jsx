import Link from 'next/link';

const ResourceItem = ({ title, href }) => {
  return (
    <Link href={`/resources/${href}`}>
      <a target="_blank" rel="noopener noreferrer">
        <h2 className="mb-3 flex items-center justify-start font-food-truck text-2xl text-primary">
          <span className="mr-3 inline-block h-4 w-4 rounded-full bg-primary ">
            {' '}
          </span>
          <span> {title}</span>
        </h2>
      </a>
    </Link>
  );
};

export default ResourceItem;
