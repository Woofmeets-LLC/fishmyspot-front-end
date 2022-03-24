import { integrationSdk } from "../../../sharetribe/integrationSDK";

export default async function handler(req, res) {
    const { rating, reviewCount, listingId } = req.body;


    try {
        if (rating && reviewCount && listingId) {
            await integrationSdk.listings.update({
                id: listingId,
                publicData: {
                    rating:Math.floor(+rating),
                    absoluteRating: rating,
                    reviewCount,
                },
            }, {
                expand: true,
            });

        } else {
            throw new Error("Invalid request");
        }

        res.status(200).send();
    } catch (error) {
        res.status(400).send();
    }
}

export const config = {
    bodyParser: true
}