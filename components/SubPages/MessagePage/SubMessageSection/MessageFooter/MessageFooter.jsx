import React from 'react';
import { TiCameraOutline } from "react-icons/ti";
import { IoSendSharp } from "react-icons/io5";

const MessageFooter = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("hellooooooooo");
  }
  return (
    <div className="w-full pt-[6px]">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center border p-4 bg-white rounded-full">
          <input
            type="text"
            name="message"
            placeholder="Write Message…"
            className="flex-1 text-xl text-highlight-1 focus:outline-none"
          />
          <div className="flex items-center space-x-6 mr-3 text-2xl text-highlight-1">
            <TiCameraOutline />
            <button type="submit" className="text-3xl text-secondary">
              <IoSendSharp />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageFooter;