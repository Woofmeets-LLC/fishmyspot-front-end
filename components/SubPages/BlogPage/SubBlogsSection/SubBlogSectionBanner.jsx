const SubBlogSectionBanner = ({ src }) => {
  return (
    <div
      className="w-full h-48 md:h-80 xl:h-96 flex flex-col justify-center items-center text-white px-10"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${src}) center/cover no-repeat`,
        gap: "1.5em",
      }}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase font-food-truck">
        Our Blog
      </h1>
      <p className="text-center text-sm md:text-base 2xl:text-xl font-trade-gothic md:px-[8%] lg:px-[20%] xl:px-[28%] 2xl:px-[35%]">
        We are continuously posting latest industry updates on our blog page.
        Keep your eyes out to learn more and exciting news.
      </p>
    </div>
  );
};

export default SubBlogSectionBanner;
