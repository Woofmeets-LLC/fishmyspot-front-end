import NotificationCard from '../NotificationCard';

const SubNotifications = () => {
  return (
    <div className="md:w-[565px] lg:w-[650px] xl:w-[736px] mx-auto pt-6 sm:pt-8 md:pt-10 xl:pt-16 2xl:pt-[76px] pb-10 sm:pb-14 md:pb-20 lg:pb-24 2xl:pb-32">
      <div className='pb-4 md:pb-6 xl:pb-9'>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-food-truck uppercase text-primary">
          NOTIFICATION
        </h1>
      </div>
      <div className='space-y-6 lg:space-y-9'>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </div>
  );
};

export default SubNotifications;