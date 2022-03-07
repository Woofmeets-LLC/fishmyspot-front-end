import React from 'react';
import { ListItem, StatusButton } from '../../../Common';

const SubPurchaseListDetailsSection = () => {
  return (
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
      <div className='mt-8 lg:mt-14'>
        <StatusButton
          title={"Purchased"}
        />
      </div>
    </div>
  );
};

export default SubPurchaseListDetailsSection;