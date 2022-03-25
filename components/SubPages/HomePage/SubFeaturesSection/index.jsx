import { FaHeart } from "react-icons/fa";
import { GiCirclingFish } from "react-icons/gi";
import { MdHome } from "react-icons/md";
import styles from './SubFeaturesSection.module.css';

const SubFeaturesSection = () => {
  return (
    <section className='container'>
      <div className={styles['features-container']}>
        <div className='text-center'>
          <h1 className={styles['features-heading']}>Two Line Header Example For Telling Features</h1>
        </div>
        <div className={styles['features-item-container']}>
          <div className='text-center'>
            <div className={styles['icon-container']}>
              <span className={styles['icons']}>
                <GiCirclingFish />
              </span>
            </div>
            <div className='pt-6'>
              <h3 className={styles['features-content-title']}>easy catch</h3>
              <p className={styles['features-content']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illo sint reiciendis recusandae ipsa fugiat suscipit ullam</p>
            </div>
          </div>
          <div className='text-center'>
            <div className={styles['icon-container']}>
              <span className={styles['icons']}>
                <FaHeart />
              </span>
            </div>
            <div className='pt-6'>
              <h3 className={styles['features-content-title']}>easy catch</h3>
              <p className={styles['features-content']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illo sint reiciendis recusandae ipsa fugiat suscipit ullam</p>
            </div>
          </div>
          <div className='text-center'>
            <div className={styles['icon-container']}>
              <span className={styles['icons']}>
                <MdHome />
              </span>
            </div>
            <div className='pt-6'>
              <h3 className={styles['features-content-title']}>easy catch</h3>
              <p className={styles['features-content']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit illo sint reiciendis recusandae ipsa fugiat suscipit ullam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFeaturesSection;