import { getSdk } from "../../sharetribe/sharetribeSDK";

export const listingImagesUpload = async (images) => {
    const upload = getSdk().images.upload;
   const allImages =  images?.map((file, index) => {
        return upload({ image: file }, { expand: true })
    })

    try {
        const allImageUpload = await Promise.allSettled(allImages);
        const successfulUploadedImages = allImageUpload.filter(image => image.status === "fulfilled");
        
        return {
            success: true,
            uuids: successfulUploadedImages.map(image => image.value.data.data.id),
            message: "Images uploaded successfully"
        };
    } catch (err) {
        return {
            success: false,
            message: "Error uploading images"
        }
    }
}