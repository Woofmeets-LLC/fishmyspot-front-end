import Link from 'next/link';
import React from 'react';
import styles from './SettingCard.module.css';

const SettingCard = ({ title, description, Icon, href = "#" }) => {
  return (
    <Link href={href}>
      <a>
        <div className={styles['setting-card-container']}>
          <div className={styles['setting-card-inner-container']}>
            <div className='icons mb-2 md:mb-4 2xl:mb-7'>
              <Icon />
            </div>
            <div className='text-primary'>
              <h3 className={styles['setting-card-title']}>{title}</h3>
              <p className={styles['setting-card-description']}>{description}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default SettingCard;