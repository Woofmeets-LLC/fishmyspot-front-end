import Link from "next/link";

const FeaturedSpot = ({ img, title, description, spotLink }) => {
  return (
    <div className="mx-3 xl:mx-5 shadow-xl rounded-xl overflow-hidden">
      <div className="w-full h-[180px] lg:h-[160px] 2xl:h-[200px] 3xl:h-[227px] rounded-xl overflow-hidden">
        <img src={img} alt="Pond" className="w-full h-full 2xl:h-full" />
      </div>
      <div className="p-3 2xl:py-6 2xl:pl-4 2xl:pr-6">
        <h4 className="text-base md:text-lg lg:text-base xl:text-xl text-primary font-trade-gothic-bold capitalize mb-3 2xl:mb-4">
          {title}
        </h4>
        <p className="text-sm font-trade-gothic text-highlight-1 mb-3 2xl:mb-5">
          {description.slice(0, 153) + "..."}
        </p>

        <Link href={spotLink}>
          <a className="w-full bg-secondary inline-block text-sm font-trade-gothic-bold text-yellow-50 cursor-pointer text-center p-1 rounded">
            Book Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedSpot;
