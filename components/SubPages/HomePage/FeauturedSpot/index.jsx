import Link from "next/link";

const FeaturedSpot = ({ img, title, description, spotLink }) => {
  return (
    <div className="mx-3 overflow-hidden rounded-xl shadow-xl xl:mx-5">
      <div className="h-[180px] w-full overflow-hidden rounded-xl lg:h-[160px] 2xl:h-[200px] 3xl:h-[227px]">
        <img src={img} alt="Pond" className="h-full w-full 2xl:h-full" />
      </div>
      <div className="flex flex-col p-3 2xl:py-6 2xl:pl-4 2xl:pr-6">
        <h4 className="mb-3 flex-auto font-trade-gothic-bold text-base capitalize text-primary md:text-lg lg:text-base xl:text-xl 2xl:mb-4">
          {title}
        </h4>
        <p className="mb-3 font-trade-gothic text-sm text-highlight-1 2xl:mb-5">
          {description?.length < 133
            ? description
            : description?.slice(0, 132) + "..."}
        </p>

        <Link href={spotLink}>
          <a className="inline-block w-full cursor-pointer rounded bg-secondary p-1 text-center font-trade-gothic-bold text-sm text-yellow-50">
            Book Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSpot;
