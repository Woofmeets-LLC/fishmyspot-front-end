const SubResourcesBannerSection = () => {
  return (
    <div
      className="flex h-48 w-full flex-col items-center justify-center px-10 text-secondary md:h-80 xl:h-96"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("/images/resource02.jpg") center/cover no-repeat`,
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
