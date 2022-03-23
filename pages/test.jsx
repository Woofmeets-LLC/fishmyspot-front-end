import axios from "axios";
import React from "react";
import { useCurrentUser } from "../hooks/users";
import HomeLayout from "../layouts/HomeLayout";
import { } from "../services/date/date-overflow-handler";
import { getSdk } from "../sharetribe/sharetribeSDK";


const Test = () => {
  const showListingData = () => {
    const listingId = "62287fa7-5f0b-4322-8025-7a24207a9e5a";
    getSdk()
      .ownListings.show({ id: listingId })
      .then((res) => {
        // res.data contains the response data
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const user = useCurrentUser();
  const showReviews = () => {
    // getSdk().reviews.show({
    //   id: "623994ea-9e55-4526-b711-814990e1cf0c"
    // })
    //   .then(res => {
    //     // res.data contains the response data
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.dir(err);
    //   });
    axios.post('/api/hello', {
      userId: "62305252-d42f-47dd-af63-03a080124326",
      lastTransitions: ["transition/review-1-by-customer"],
    })
      .then(listingRes => {
        console.log(listingRes);
      })
      .catch(listingErr => {
        console.dir(listingErr);
      })
  }


  return (
    <HomeLayout isPrivate>
      <div className="my-8 text-center">
        <button
          onClick={showReviews}
          className="bg-secondary text-white px-4 py-1 rounded"
        >
          Show reviews
        </button>
      </div>
    </HomeLayout>
  );
};

export default Test;
