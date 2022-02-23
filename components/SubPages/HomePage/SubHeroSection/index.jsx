import React from 'react';
import styles from './SubHeroSection.module.css';

const SubHeroSection = () => {
    return (
        <section className='container'>
            <div className='mt-6 lg:mt-8 xl:mt-12'>
                <div className="relative">
                    <div className='w-full rounded-xl overflow-hidden'>
                        <img
                            src={"/images/fatherSonFishing.jpg"}
                            title="Banner"
                            className='w-full 3xl:h-[704px] 3xl:object-cover'
                        />
                    </div>
                    <div className={styles['hero-content']}>
                        <h1 className={styles['hero-title']}>Get Hooked On Unforgettable fishing!</h1>
                        <button
                            className={styles['hero-button']}
                        >
                            List your spot
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubHeroSection;