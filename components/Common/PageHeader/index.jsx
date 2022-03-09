import React from 'react';

const PageHeader = ({ title, userName, userEmail }) => {
  return (
    <div className='text-primary space-y-2 md:space-y-3 lg:space-y-5'>
      <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl ${title === 'Account' ? 'capitalize' : ' uppercase'} font-food-truck`}>
        {title}
      </h1>
      <p className='text-base md:text-lg lg:text-xl 2xl:text-2xl font-trade-gothic'>
        {userName}, {userEmail}
      </p>
    </div>
  );
};

export default PageHeader;