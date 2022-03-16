import { useField } from 'formik';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { onSelectFile } from '../../../../services/image-upload/imageUploadHandler';
import UploadPhoto from '../SubAccessToPond/UploadPhoto';

const AmenitiesPhotos = () => {
    const [fileField, fileMeta, fileHelpers] = useField({ name: "amenities-images-file" });
    const [base64Field, base64Meta, base64Helpers] = useField({ name: "amenities-images-base64" });

    const handleFileUpload = (e) => {
        onSelectFile(e).then((file) => {
            const fileData = file;
            fileHelpers?.setValue([...fileField.value, fileData?.file]);
            base64Helpers?.setValue([...base64Field.value, fileData?.base64]);
        });
    };

    const handleDeleteImg = (index) => {
        fileHelpers.setTouched(true);
        base64Helpers.setTouched(true);
        fileHelpers.setValue(fileField.value.filter((photo, i) => i !== index));
        base64Helpers.setValue(base64Field.value.filter((photo, i) => i !== index));
    }
    return (
        <>
            <h2 className="text-primary font-trade-gothic-bold text-2xl mb-4">Upload Photos <sup
                className={'text-yellow-500 text-sm'}>(optional)</sup></h2>
            <div className="grid sm:grid-cols-2 gap-5">
                {
                    base64Field?.value?.map((image, index) => (
                        <div key={index} className="relative h-48 sm:h-28 md:h-48 lg:h-36 xl:h-40 3xl:h-48 w-full overflow-hidden">
                            <img src={image} className="h-full w-full object-cover rounded" alt="" />
                            <button
                                onClick={() => handleDeleteImg(index)}
                                type="button"
                                className="flex justify-center items-center absolute top-0 right-0 w-6 h-6 bg-gray-50 text"
                            >
                                <FaTimes />
                            </button>

                        </div>
                    ))
                }
                <UploadPhoto handleFileUpload={handleFileUpload} />
            </div>
        </>
    );
};

export default AmenitiesPhotos;