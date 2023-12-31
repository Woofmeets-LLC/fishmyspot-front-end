import React from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

const UploadPhoto = ({ handleFileUpload, title = "Choose an image" }) => {
    return (
        <div className="w-full block text-secondary text-sm font-trade-gothic text-center mb-2">
            <label className="cursor-pointer" htmlFor="upload">
                <div className="flex justify-center items-center flex-col h-48 sm:h-28 md:h-48 lg:h-36 xl:h-40 3xl:h-48 w-full border-2 border-dashed rounded-lg text-gray-500">
                    <FaCloudUploadAlt className="text-4xl text-gray-400 " />
                    <p className="px-6 text-[12px]">{title}</p>
                    <p className="px-6 text-[12px]">JPG, PNG, GIF</p>
                </div>
                <input
                    className="hidden"
                    id="upload"
                    type="file"
                    placeholder="Please enter your upload here..."
                    name="upload"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                />
            </label>
        </div>

    );
};

export default UploadPhoto;