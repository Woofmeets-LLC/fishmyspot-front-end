import React from 'react';
import styles from './SubWireFrameSection.module.css';

const SubWireFramesSection = () => {
  return (
    <section className='container'>
      <div className={styles['wireframe-container']}>
        <div className="grid grid-cols-12 md:gap-8">
          <div className={styles['wireframe-content-area']}>
            <div className={styles['wireframe-content-wrapper']}>
              <h1 className={styles['wireframe-content-heading']}>Easy Way To Create High fidelity WireFrames</h1>
              <p className={styles['wireframe-content']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci minima distinctio nostrum ad iure voluptatem enim repudiandae impedit temporibus modi molestiae, eaque illo, nesciunt error? Eos architecto ipsam nostrum!</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 order-1 md:order-2">
            <iframe
              className='w-full h-[220px] sm:h-[240px] md:h-full'
              src="https://www.youtube.com/embed/DoA_D6tmo6o"
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