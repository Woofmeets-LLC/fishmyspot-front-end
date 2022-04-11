
const SubWireFramesSection = () => {
  return (
    <section className='container'>
      <div className="py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20 2xl:py-32">
        <div className="grid grid-cols-12 md:gap-8">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1">
            <div className="space-y-2 sm:space-y-3 md:space-y-4 pt-8 md:pt-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-food-truck text-primary">Why Use FishMySpot?</h1>
              <p className="text-sm sm:text-base 2xl:text-xl text-highlight-1 font-trade-gothic">Why Fish From FishMySpot’s Marketplace?  Our offerings of private ponds and lakes are under fished, secluded, private, and make for a great experience for the family or avid fisherman/woman who enjoy the thrill of fishing at new water holes. Specifically, parents can teach their children to fish without the hassle of crowds and long drive to public lakes. Plus, children are more likely to catch fish frequently at under-fished ponds and lakes than going to a public lake. And if kids catch fish, they will beg to return.</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 order-1 md:order-2 flex items-center">
            <iframe
              className='w-full aspect-video'
              src="https://www.youtube.com/embed/_Ye8q5U_nGg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubWireFramesSection;