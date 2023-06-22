import React from 'react';

const VideoSection = () => {
  return (
    <div className="container">
      <div className="mx-auto my-10 overflow-hidden rounded-lg xs:rounded-xl md:w-2/3 lg:rounded-2xl">
        <iframe
          className="aspect-video w-full"
          src="https://www.youtube.com/embed/94kgY8n3jjg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
