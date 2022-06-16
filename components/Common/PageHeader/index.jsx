const PageHeader = ({ title, userName, userEmail }) => {
  return (
    <div className="space-y-2 text-primary md:space-y-3 lg:space-y-5">
      <h1
        className={`font-food-truck text-2xl uppercase md:text-3xl lg:text-4xl 2xl:text-5xl`}
      >
        {title}
      </h1>
      <p className="font-trade-gothic text-base md:text-lg lg:text-xl 2xl:text-2xl">
        {userName}, {userEmail}
      </p>
    </div>
  );
};

export default PageHeader;
