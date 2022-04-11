const Review = ({ name, review, location, image }) => {
  return (
    <div className="bg-white shadow-xl rounded-2xl pointer-events-none mx-3 overflow-hidden">
      <div className="overflow-hidden">
        <div className="h-[213px] grid grid-cols-12 gap-4">
          <div className="col-span-4 overflow-hidden">
            <div className="h-full">
              <img
                src={image}
                className="w-full h-full object-cover" alt="" />
            </div>
          </div>
          <div className="col-span-8">
            <div className="py-3 pr-3">
              <h2 className="text-[17px] font-trade-gothic-bold">{name} </h2>
              <p className="text-sm font-trade-gothic">{review}</p>
              <span className="inline-block text-xs  font-trade-gothic font-semibold">{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;