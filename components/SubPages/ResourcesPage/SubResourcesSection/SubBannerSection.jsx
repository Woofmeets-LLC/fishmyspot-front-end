const SubResourcesBannerSection = ({ src }) => {
  return (
    <div
      className="flex h-48 w-full flex-col items-center justify-center px-10 text-blue-400 md:h-80 xl:h-96"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${src}) center/cover no-repeat`,
        gap: '1.5em',
      }}
    >
      <h1 className="font-food-truck text-2xl uppercase md:text-3xl lg:text-4xl 2xl:text-5xl">
        Resources
      </h1>
    </div>
  );
};

export default SubResourcesBannerSection;
