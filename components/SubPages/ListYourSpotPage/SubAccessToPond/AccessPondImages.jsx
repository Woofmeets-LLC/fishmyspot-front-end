import { useField } from 'formik';
import React from 'react';
import UploadPhoto from './UploadPhoto';

const AccessPondImages = () => {
    const [fileField, fileMeta, fileHelpers] = useField({ name: "ATP-images-file" });
    const [base64Field, base64Meta, base64Helpers] = useField({ name: "ATP-images-base64" });
    const handleFileUpload = (e) => {
        if (e.target.files?.length > 1) {
            [...e.target.files].forEach((imgFile) => {
                onSelectMultipleFile(imgFile).then((file) => {
                    const fileData = file;
                    fileHelpers?.setValue([...fileField.value, fileData?.file]);
                    base64Helpers?.setValue([...base64Field.value, fileData?.base64]);
                });
            });
        } else {
            onSelectFile(e).then((file) => {
                photosHelpers.setTouched(true);
                propertyImagesHelpers.setTouched(true);
                photosHelpers.setValue([...photosField.value, file?.base64]);
                propertyImagesHelpers.setValue([
                    ...propertyImagesField.value,
                    file?.file,
                ]);
            });
        }
    };

    return (
        <>
            <h2 className="text-primary font-trade-gothic-bold text-xl">Upload Photos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <UploadPhoto handleFileUpload={handleFileUpload} />
                <UploadPhoto handleFileUpload={handleFileUpload} />
                <UploadPhoto handleFileUpload={handleFileUpload} />
            </div>
        </>
    );
};

export default AccessPondImages;