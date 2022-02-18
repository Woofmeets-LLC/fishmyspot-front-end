import React from 'react';

const Image = ({ imageUrl, title }) => {
  return (
    <>
      <img src={imageUrl} alt={title} />
    </>
  );
};

export default Image;