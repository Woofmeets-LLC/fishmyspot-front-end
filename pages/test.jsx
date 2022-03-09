import React from "react";
import HomeLayout from "../layouts/HomeLayout";
import { getSdk } from '../sharetribe/sharetribeSDK';
import { UUID } from "../types";

const Test = () => {
  const updateListing = () => {
    getSdk().ownListings.update({
      id: new UUID("62270d28-49c0-4677-aa2f-a984aa4f9967"),
      title: "Test 111 N HILL ST, LOS ANGELES",

    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <HomeLayout>
      <div className="my-5 text-center">
        <button
          onClick={updateListing}
          className="bg-secondary text-white px-4 py-2 rounded">Update listing</button>
      </div>
      corrupti quod omnis aliquam earum quaerat perferendis quia. Quos quaerat
      incidunt officiis ullam? Sit magni minima rerum fugiat eum natus? Rem
      tempora sunt, culpa eveniet nisi tenetur ratione laboriosam aspernatur
      praesentium nesciunt perspiciatis quaerat odit optio adipisci recusandae
      voluptatibus deleniti. Voluptatum, dolorem corrupti. Vitae nisi eaque ad
      eos magnam fugiat tenetur asperiores libero consectetur veniam ut dicta
      quis et, inventore porro temporibus officiis ex at totam nesciunt. Error
      facere quam molestias eius. Necessitatibus iste eaque velit quisquam, vero
      eligendi ratione omnis amet nesciunt, ab totam ullam saepe voluptatibus
      aperiam illo, at eos quos autem nam fugit assumenda doloribus consequuntur
      modi. Hic veniam neque error. Aspernatur delectus magni, cum ipsam dolores
      ducimus harum sunt quia ab molestias unde saepe ratione consequuntur
      consectetur, quod perferendis accusamus laudantium a reprehenderit? Sequi
      earum reprehenderit cupiditate iste praesentium, neque quasi tempore
      facere vitae sed fugiat velit voluptate rerum ipsam vero voluptatem modi
      nulla repellendus sapiente ducimus nihil! Illo recusandae officia esse
      repellat explicabo in sapiente dolore, optio facilis omnis ipsam doloribus
      a fugit rem dolorum harum eligendi voluptates officiis dignissimos aliquid
      facere. Molestiae, cum harum eius officiis numquam ad impedit voluptate
      voluptatum iste at!
    </HomeLayout>
  );
};

export default Test;
