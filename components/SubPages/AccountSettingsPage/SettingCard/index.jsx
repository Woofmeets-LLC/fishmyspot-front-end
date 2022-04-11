import Link from 'next/link';

const SettingCard = ({ title, description, Icon, href = "#" }) => {
  return (
    <Link href={href}>
      <a>
        <div className="bg-white shadow-xl rounded-xl cursor-pointer h-[132px] sm:h-[158px] md:h-[168px] lg:h-[180px] 2xl:h-[248px]">
          <div className="py-4 px-4 md:px-6 lg:py-5 lg:px-6 2xl:pt-8 2xl:pr-9 2xl:pb-6 2xl:pl-11">
            <div className='icons mb-2 md:mb-4 2xl:mb-7'>
              <Icon />
            </div>
            <div className='text-primary'>
              <h3 className="text-base md:text-xl lg:text-2xl 2xl:text-[28px] font-trade-gothic-bold mb-1 md:mb-2 2xl:mb-4 capitalize">{title}</h3>
              <p className="text-sm md:text-base 2xl:text-lg font-trade-gothic">{description}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SettingCard;