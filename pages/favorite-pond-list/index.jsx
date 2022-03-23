import React from 'react';
import SubFavoritePondList from '../../components/SubPages/FavoritePondListPage';
import HomeLayout from '../../layouts/HomeLayout';

const FavoritePondList = () => {
  return (
    <HomeLayout
      isPrivate
      guards={{
        account_type: "angler",
        fallbackUrl: "/",
      }}>
      <section className="bg-[#fbfbfb]">
        <div className="container">
          <SubFavoritePondList />
        </div>
      </section>
    </HomeLayout>
  );
};

export default FavoritePondList;
