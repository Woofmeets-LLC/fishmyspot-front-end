/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';

const SubHeroSection = () => {
    return (
        <section className='container'>
            <div className='mt-6 lg:mt-8 xl:mt-12'>
                <div className="relative flex items-center">
                    <div className='w-full rounded-xl overflow-hidden'>
                        <img
                            src={"/images/fatherSonFishing.jpg"}
                            title="Banner"
                            className='w-full 3xl:h-[704px] 3xl:object-cover'
                        />
                    </div>
                    <div className="absolute max-w-[200px] xl:max-w-[290px] 2xl:max-w-[390px] left-8 sm:left-12 md:left-16 lg:left-32 xl:left-36 2xl:left-28">
                        <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-white font-food-truck mb-3 md:mb-6 drop-shadow-lg">UNFORGETTABLE FISHING LOCALLY</h1>
                        <Link href="/services">
                            <a className="bg-secondary text-white text-xs sm:text-sm lg:text-base py-2 px-3 sm:py-2 sm:px-4 lg:py-3 lg:px-6 rounded font-trade-gothic-bold">
                                Fish Now
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubHeroSection;