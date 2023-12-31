import React from 'react';
import { PageHeader, PurchaseOrCancellationCard } from '../../components/Common';
import HomeLayout from '../../layouts/HomeLayout';

const Cancellation = () => {
  return (
    <HomeLayout>
      <div className='bg-[#fcfcfc]'>
        <div className='container flex flex-col gap-4 lg:gap-5 pb-10 md:pb-12 lg:pb-16 2xl:pb-20'>
          <div className='pt-6 sm:pt-8 md:pt-10 2xl:pt-12 mb-3 md:mb-4 2xl:mb-5'>
            <PageHeader
              title={"Cancellation"}
              userName={"Larissa Smith"}
              userEmail={"larissa@gmail.com"}
            />
          </div>
          <PurchaseOrCancellationCard status={"Waiting"} />
          <PurchaseOrCancellationCard status={"Canceled"} />
          <PurchaseOrCancellationCard status={"Canceled"} />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Cancellation;
