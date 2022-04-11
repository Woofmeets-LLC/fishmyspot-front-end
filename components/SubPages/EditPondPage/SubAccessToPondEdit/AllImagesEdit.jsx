import { useField } from 'formik';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { onSelectFile } from '../../../../services/image-upload/imageUploadHandler';
import UploadPhoto from '../../ListYourSpotPage/SubAccessToPond/UploadPhoto';

const AllImagesEdit = () => {
    const [fileField, fileMeta, fileHelpers] = useField({ name: "ATP-images-file" });
    const [base64Field, base64Meta, base64Helpers] = useField({ name: "ATP-images-base64" });

    const handleFileUpload = (e) => {
        onSelectFile(e).then((file) => {
            const fileData = file;
            fileHelpers?.setValue([...fileField.value, ...fileData?.files]);
            base64Helpers?.setValue([...base64Field.value, ...fileData?.base64s]);
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
            <h2 className="text-primary font-trade-gothic-bold mb-4">
                <span className="text-2xl">Upload All Photos</span> {" "}
                <span className="font-sm text-secondary font-trade-gothic">(Access to pond, additional and amenities photos)</span>
            </h2>
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
                <UploadPhoto
                    handleFileUpload={handleFileUpload}
                    title={fileField?.value?.length > 0 ? "Choose an image" : "Choose an thumbnail"} />

            </div>
            <div className="text-gray-500 text-sm">Tip: Choose the top 2-4 photos of your home from different angles in good light that really show the Spot and photo size should not be more than 1MB!</div>
            {
                fileMeta?.touched && fileMeta?.error ? (
                    <div className="mt-2 text-red-500 text-sm">{fileMeta?.error}</div>
                ) : null
            }
        </>
    );
};

export default AllImagesEdit;