import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCurrentUser } from "../hooks/users";
import HomeLayout from "../layouts/HomeLayout";
import { } from "../services/date/date-overflow-handler";
import { getSdk } from "../sharetribe/sharetribeSDK";
import { setStripeAccount } from "../store/slices/stripeAccountSlice";


const Test = () => {
  const showListingData = () => {
    const listingId = "62287fa7-5f0b-4322-8025-7a24207a9e5a";
    getSdk()
      .ownListings.show({ id: listingId })
      .then((res) => {
        // res.data contains the response data
      })
      .catch((err) => {

      });
  };
  const user = useCurrentUser();
  const showReviews = () => {
    // getSdk().reviews.show({
    //   id: "623994ea-9e55-4526-b711-814990e1cf0c"
    // })
    //   .then(res => {
    //     // res.data contains the response data
    //   })
    //   .catch(err => {});
    axios.post('/api/hello', {
      userId: "62305252-d42f-47dd-af63-03a080124326",
      lastTransitions: ["transition/review-1-by-customer"],
    })
      .then(listingRes => {

      })
      .catch(listingErr => {
        console.dir(listingErr);
      })
  }

  const dispatch = useDispatch();
  const stripeAccount = useSelector(state => state.stripeAccount);

  const getStripeData = () => {
    getSdk().stripeAccount.fetch()
      .then(res => {
        const stripeData = res?.data?.data;
        const isTransferActivated = stripeData?.attributes?.stripeAccountData?.capabilities?.card_payments == 'active' || stripeData?.attributes?.stripeAccountData?.capabilities?.transfers == 'active';

        dispatch(setStripeAccount({ ...stripeData, isTransferActivated }));
      })
      .catch(error => {
        console.dir(error);
      });
  }

  const check = () => {
    const originURL = window.location.origin;
    getSdk().stripeAccountLinks.create({
      failureURL: originURL,
      successURL: originURL + "/list-your-spot",
      type: "account_onboarding",
      collect: "currently_due",
    })
      .then(res => { })
      .catch(err => {
        console.dir(err)
      })
  }

  return (
    <HomeLayout isPrivate>
      <div className="my-8 text-center">
        <button
          onClick={getStripeData}
          className="bg-yellow-500 px-10 py-2 rounded text-white text-lg"
        >
          get stripe data
        </button>
      </div>
      <div className="my-5 text-center">
        <button
          onClick={check}
          className="bg-yellow-500 px-10 py-2 rounded text-white text-lg"
        >
          Check now
        </button>
      </div>
    </HomeLayout>
  );
};

export default Test;
