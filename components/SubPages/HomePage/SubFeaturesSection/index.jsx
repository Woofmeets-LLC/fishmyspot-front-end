import { GiCirclingFish } from "react-icons/gi";
import styles from './SubFeaturesSection.module.css';

const SubFeaturesSection = () => {
  return (
    <section className='container'>
      <div className={styles['features-container']}>
        <div className='text-center'>
          <h1 className={styles['features-heading']}>Fish You Own Private Pond Or Lake And Get Hooked!</h1>
        </div>
        <div className={styles['features-item-container']}>
          <div className='text-center'>
            <div className={styles['icon-container']}>
              <span className={styles['icons']}>
                <GiCirclingFish />
              </span>
            </div>
            <div className='pt-6'>
              <h3 className={styles['features-content-title']}>QUALITY FISHING</h3>
              <p className={styles['features-content']}>You will have exclusive access to the fishing spot you reserved. Stop fighting the crowds or driving far  from home and start catching large fish (and lots of them).</p>
            </div>
          </div>
          <div className='text-center'>
            <div className={styles['icon-container']}>
              <span className={styles['icons']}>
                <img
                  src="/images/001-camera.png"
                  className="w-[30px] h-[30px]"
                  alt="New Memories" />
              </span>
            </div>
            <div className='pt-6'>
              <h3 className={styles['features-content-title']}>NEW MEMORIES</h3>
              <p className={styles['features-content']}>Private fishing spots are maintained, fish are plentiful to catch, and the location is convenient. This makes for a perfect occasion to create new memories.</p>
            </div>
          </div>
          <div className='text-center'>
            <div className={styles['icon-container']}>
              <span className={styles['icons']}>
                <img
                  src="/images/002-boat.png"
                  className="w-[30px] h-[30px]"
                  alt="Personalized experience" />
              </span>
            </div>
            <div className='pt-6'>
              <h3 className={styles['features-content-title']}>PERSONALIZED EXPERIENCE</h3>
              <p className={styles['features-content']}>When you book a fishing spot, we make it easy to find what you need. We have you covered, whether you are looking for a particular type of fish, renting a boat, or looking to camp overnight. Our fishing spots have an array of private amenities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFeaturesSection;