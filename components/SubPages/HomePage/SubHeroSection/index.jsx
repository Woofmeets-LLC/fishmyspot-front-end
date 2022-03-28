/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import React from 'react';
import styles from './SubHeroSection.module.css';

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
                    <div className={styles['hero-content']}>
                        <h1 className={styles['hero-title']}>Get Hooked On Unforgettable fishing!</h1>
                        <Link href="/services">
                            <a className={styles['hero-button']}>
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