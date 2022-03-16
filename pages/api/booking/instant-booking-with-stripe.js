// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getTrustedSdk } from "../../../sharetribe/sharetribeSDK";
export default async function handler(req, res) {
    const { id , bookingStart,  bookingEnd} = req.body
    console.log({
        bookingStart: bookingStart,
        bookingEnd: bookingEnd,
    });
    try {
        const sdk = await getTrustedSdk(req)
        const dd = await sdk.transactions.transition({
            id: id,
            transition: "transition/request-payment-after-enquiry",
            params: {
                bookingStart: new Date("2022-03-17T06:00:00.000-04:00").toISOString(),
                bookingEnd: new Date("2022-03-17T21:00:00.000-04:00").toISOString(),
                // bookingStart: new Date("2022-03-16T011:00:00.000-04:00").toISOString(),
                // bookingEnd: new Date("2022-03-16T16:00:00.000-04:00").toISOString(),
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