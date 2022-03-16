import React, { useState } from 'react';
import { TiCameraOutline } from "react-icons/ti";
import { IoSendSharp } from "react-icons/io5";

const MessageFooter = ({ messages, setMessages }) => {
  const [inputValue, setInputValue] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.length > 0) {
      const messageObj = {
        inputValue,
        time: new Date().toLocaleTimeString(),
        sentFrom: true,
      }
      setMessages([...messages, messageObj]);
      setInputValue('');
    }
    // if (image !== null) {
    //   const formData = new FormData();
    //   formData.append('image', image);
    //   console.log(formData);
    // }
  }
  return (
    <div className="w-full pt-[6px]">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center border p-3 2xl:p-4 bg-white rounded-full">
          <input
            type="text"
            name="message"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Write Message…"
            className="flex-1 bg-white xl:text-lg 2xl:text-xl text-highlight-1 focus:outline-none"
          />
          <div className="flex items-center space-x-4 xl:space-x-6 mr-3 text-2xl text-highlight-1">
            <TiCameraOutline
              className='cursor-pointer'
            />
            {/* <input
              type="file"
              accept='image/*'
              onChange={e => setImage(e.target.files[0])}
            /> */}
            <button type="submit" className="text-2xl 2xl:text-3xl text-secondary">
              <IoSendSharp />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MessageFooter;