import React, { useState } from 'react';
import { ListItem, PageHeader, StatusButton } from '../../components/Common';
import CancellationPopUp from '../../components/SubPages/CancelationWaitingPage/CancellationPopUp';
import HomeLayout from '../../layouts/HomeLayout';

const CancellationWaiting = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <HomeLayout>
      <CancellationPopUp
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <div className='bg-[#fcfcfc]'>
        <div className='container flex flex-col gap-4 lg:gap-5 pb-10 md:pb-12 lg:pb-16 2xl:pb-20'>
          <div className='2xl:w-[1160px] 2xl:mx-auto'>
            <div className='pt-6 sm:pt-8 md:pt-10 2xl:pt-12 mb-3 md:mb-4 2xl:mb-5'>
              <PageHeader
                title={"Cancelation | Waiting"}
                userName={"Larissa Smith"}
                userEmail={"larissa@gmail.com"}
              />
            </div>
            <div>
              <h3 className='text-xl lg:text-2xl font-trade-gothic-bold text-primary uppercase mb-6 lg:mb-10'>
                Details
              </h3>

              <div className='grid lg:grid-cols-2 sm:text-lg 2xl:text-xl'>
                <div className='order-2 lg:order-1 space-y-1 lg:space-y-2'>
                  <ListItem
                    title={"Name"}
                    value={"Larissa Smith"}
                  />
                  <ListItem
                    title={"Email"}
                    value={"larissa@gmail.com"}
                  />
                  <ListItem
                    title={"Phone Number"}
                    value={"+880XXXXXXXX"}
                  />
                  <ListItem
                    title={"Date"}
                    value={"February 11, 2022"}
                  />
                  <ListItem
                    title={"Time"}
                    value={"All Day"}
                  />
                  <ListItem
                    title={"Location"}
                    value={"Royalation, OH"}
                  />
                  <ListItem
                    title={"Fishing spot"}
                    value={"OH- Stark County- Royalation"}
                  />
                  <ListItem
                    title={"Catch Requirment"}
                    value={"Catch and Keep"}
                  />
                  <ListItem
                    title={"Angler"}
                    value={"4"}
                  />
                  <ListItem
                    title={"Full Day Cost"}
                    value={"$125.00"}
                  />
                  <ListItem
                    title={"Service fees"}
                    value={"$25.00"}
                  />
                  <ListItem
                    title={"Experiences"}
                    value={"$75.00"}
                  />
                  <ListItem
                    title={"Price"}
                    value={"$25.00"}
                  />
                  <ListItem
                    title={"Payment Method"}
                    value={"Visa Debit Card"}
                  />
                </div>
                <div className="order-1 lg:order-2 mb-4 lg:mb-0 lg:mt-[10px]">
                  <div className='w-full h-[240px] sm:h-[300px] md:h-[350px] lg:h-[500px] 2xl:h-full'>
                    <img
                      src="/images/pond1.jpg"
                      alt="pond"
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>
              <div className='flex justify-between mt-8 lg:mt-14'>
                <button
                  className={`text-[#fcfcfc] font-trade-gothic py-2 px-6 md:py-3 md:px-8 lg:px-10 2xl:py-4 2xl:px-14 bg-[#65947e] rounded`}
                >
                  Reschedule
                </button>
                <button
                  className={`text-[#fcfcfc] font-trade-gothic py-2 px-6 md:py-3 md:px-8 lg:px-10 2xl:py-4 2xl:px-14 bg-[#ff6546] rounded`}
                  onClick={() => setModalOpen(prevState => !prevState)}
                >
                  Canceled
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CancellationWaiting;