import React from 'react';

const UserAccountSectionTitle = ({ title }) => {
  return (
    <div className='mb-4 lg:mb-6 2xl:mb-8'>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase text-primary font-food-truck">
        {title}
      </h1>
    </div>
  );
};

export default UserAccountSectionTitle;