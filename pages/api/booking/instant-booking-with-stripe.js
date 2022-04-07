// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getTrustedSdk } from "../../../sharetribe/sharetribeSDK";
export default async function handler(req, res) {
    const { id, bookingStart, bookingEnd, lineItems } = req.body;
    const totalPrice = lineItems.reduce((PrevTotal, lineItem) => PrevTotal + lineItem.unitPrice.amount, 0);

    try {
        // https://www.sharetribe.com/docs/references/transaction-process-actions/#:~:text=Configuration%20options%3A%20%2D-,Pricing,-%3Aaction/privileged%2Dset
        const sdk = await getTrustedSdk(req)
        const dd = await sdk.transactions.transition({
            id: id,
            transition: "transition/request-payment-after-enquiry",
            params: {
                bookingStart: new Date(bookingStart).toISOString(),
                bookingEnd: new Date(bookingEnd).toISOString(),
                lineItems: [...lineItems,{
                    code: 'line-item/provider-commission',
                    unitPrice:{
                        amount: totalPrice,
                        currency: 'USD',
                        _sdkType: 'Money'
                    },
                    percentage: -30,
                    includeFor: ['provider']
                }],
            }
        }, {
            expand: true
        })
        res.send(dd.data)
    } catch (e) {

        res.status(400).send(e.data);
    }
}
export const config = {
    bodyParser: true
}