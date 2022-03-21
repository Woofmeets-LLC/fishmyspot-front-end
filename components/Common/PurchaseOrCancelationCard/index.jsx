import React from 'react';
import ListItem from '../ListItem';
import StatusButton from '../StatusButton';

const PurchaseOrCancellationCard = ({ status }) => {
  return (
    <div className='md:w-[650px] 2xl:w-[690px] bg-white shadow-md p-4 md:py-6 md:px-7 2xl:py-8 2xl:px-9 rounded-lg'>
      <div className='md:flex md:justify-between'>
        <div className='text-primary lg:text-lg 2xl:text-xl'>
          <ListItem
            title={"Name"}
            value={"Larissa Smith"}
          />
          <ListItem
            title={"Email"}
            value={"larisaa@gmal.com"}
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
            title={"Experiences"}
            value={"$75.00"}
          />
          <ListItem
            title={"Price"}
            value={"$225.00"}
          />
          <ListItem
            title={"Payment Method"}
            value={"Visa Debit Card"}
          />
        </div>
        <div className='mt-4 md:mt-0 lg:text-lg 2xl:text-xl'>
          <StatusButton title={status} />
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrCancellationCard;