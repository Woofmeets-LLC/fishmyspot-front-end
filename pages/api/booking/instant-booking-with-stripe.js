// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getTrustedSdk } from "../../../sharetribe/sharetribeSDK";
export default async function handler(req, res) {
    const { id , bookingStart,  bookingEnd} = req.body
    console.log({bookingStart,  bookingEnd});
    try {
        const sdk = await getTrustedSdk(req)
        const dd = await sdk.transactions.transition({
            id: id,
            transition: "transition/request-payment-after-enquiry",
            params: {
                bookingStart: new Date(bookingStart),
                bookingEnd: new Date(bookingEnd),
                lineItems: [
                    {
                        code: 'line-item/tea',
                        unitPrice: {
                            amount: 10,
                            currency: 'USD',
                            _sdkType: 'Money'
                        },
                        quantity: 10
                    }
                ]
            }
        }, {
            expand: true
        })
        res.send(dd.data)
    } catch (e) {
        console.log(e?.data || e)
        res.send(e.data)
    }
}
export const config = {
    bodyParser: true
}