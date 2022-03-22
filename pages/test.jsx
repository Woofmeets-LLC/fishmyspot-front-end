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
    getSdk().reviews.query({
      subjectId: user.id,
      state: ['pending']
    }).then(res => {
      // res.data contains the response data
      console.log(res);
    });

  }


  return (
    <HomeLayout>
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
