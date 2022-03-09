import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import {getSdk} from "../sharetribe/sharetribeSDK";


const Test = () => {
    const createStripeAccount = () => {
        getSdk().stripeAccount.create({
            country: "US",
            requestedCapabilities: ["transfers", "card_payments"]
        }, {
            expand: true
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.dir(err)
            })
    }

    const createAccountLink = () => {

        getSdk().stripeAccountLinks.create({
            failureURL: "http://localhost:3000/",
            successURL: "http://localhost:3000/test",
            type: "account_onboarding",
            collect: "currently_due",
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.dir(err)
            })
    }

    return (
        <HomeLayout>

            <button onClick={createStripeAccount}>check</button>
            <button onClick={createAccountLink}>account link</button>
        </HomeLayout>
    );
};

export default Test;
