import React from 'react';

const UserAccountSectionTitle = ({ title }) => {
  return (
    <div className='mb-8'>
      <h1 className="text-5xl uppercase text-primary font-food-truck">
        {title}
      </h1>
    </div>
  );
};

export default UserAccountSectionTitle;